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
import { z } from "zod";
import SelectLanguage from "~/components/SelectLanguage";
import { UseLogin } from "~/hook/UseLogin";

const schema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be 6-12 characters long" })
    .max(12, "Password must be 6-12 characters long"),
});

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

const Login = () => {
  const { classes } = useStyles();
  const { mutate: login, isSuccess, isError } = UseLogin();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const form = useForm({
    validate: zodResolver(schema),
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
            withAsterisk
            label={t("login.email")}
            placeholder="hello@gmail.com"
            size="md"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            withAsterisk
            label={t("login.password")}
            placeholder="Your password"
            mt="md"
            size="md"
            {...form.getInputProps("password")}
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

export default Login;
