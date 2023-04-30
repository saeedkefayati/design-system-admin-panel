import {
  Button,
  createStyles,
  Paper,
  PasswordInput,
  rem,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LockScreen } from "~/schema/User";

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
    maxWidth: rem(550),
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

const LockPage = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const form = useForm({
    validate: zodResolver(LockScreen),
    initialValues: {
      password: "",
    },
  });

  return (
    <>
      <Helmet title={String(t("seo.lock"))} />
      <form
        className={classes.wrapper}
        onSubmit={form.onSubmit((values) => {
          console.log(values);
        })}
      >
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} mt="md" mb={50}>
            {t("lock.title")}
          </Title>
          <Title order={5}>
            {t("lock.sub-title", { name: "saeedkefayati" })}
          </Title>
          <PasswordInput
            label={t("login.password")}
            placeholder="Your password"
            {...form.getInputProps("password")}
            mt="md"
            size="md"
            withAsterisk
          />
          <Button type="submit" fullWidth mt="xl" size="md">
            {t("lock.submit")}
          </Button>
        </Paper>
      </form>
    </>
  );
};

export default LockPage;
