import {
  Button,
  createStyles,
  Divider,
  Paper,
  PasswordInput,
  rem,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import SelectLanguage from "~/components/shared/SelectLanguage";
import { UseLogin } from "~/hook/UseLogin";
import { LoginSchema } from "~/schema/User";
import { LoginInput } from "~/types/form";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundImage: "url(/src/asset/login.avif)",
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: "100vh",
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `${theme.fontFamily}`,
  },
}));

const LoginPage = () => {
  const { classes } = useStyles();
  const { mutate: login, isSuccess, isError } = UseLogin();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const form = useForm<LoginInput>({
    validate: zodResolver(LoginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <>
      <Helmet title={String(t("seo.login"))} />
      <form
        className={classes.wrapper}
        onSubmit={form.onSubmit((values) => {
          login(values);
        })}
      >
        <Paper className={classes.form} radius={0} p={30}>
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={50}
          >
            {t("login.title")}
          </Title>
          <TextInput
            label={t("login.email")}
            placeholder="hello@gmail.com"
            {...form.getInputProps("email")}
            size="md"
            withAsterisk
          />
          <PasswordInput
            label={t("login.password")}
            placeholder="Your password"
            {...form.getInputProps("password")}
            mt="md"
            size="md"
            withAsterisk
          />
          <Button type="submit" fullWidth mt="xl" size="md">
            {t("login.submit")}
          </Button>
          <Button
            component={Link}
            to="/forget-password"
            variant="outline"
            fullWidth
            mt="md"
            mb="md"
          >
            {t("login.forget-password")}
          </Button>
          <Divider my="xl" label={<SelectLanguage />} labelPosition="center" />
        </Paper>
      </form>
    </>
  );
};

export default LoginPage;
