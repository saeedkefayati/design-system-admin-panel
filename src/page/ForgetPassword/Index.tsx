import {
  Button,
  Container,
  createStyles,
  Group,
  Paper,
  rem,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { ResetPasswordSchema } from "~/schema/User";
import { ResetPasswordInput } from "~/types/form";
import { getTokenStorage } from "~/util/storage";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundImage: "url(/src/asset/login.avif)",
    filter: "blur(10px) opacity(0.85)",
    zIndex: -1,
  },

  title: {
    fontSize: rem(26),
    fontWeight: 900,
  },

  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}));

const ForgetPasswordPage = () => {
  const token = getTokenStorage();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { classes } = useStyles();

  const form = useForm<ResetPasswordInput>({
    validate: zodResolver(ResetPasswordSchema),
    initialValues: {
      email: "",
    },
  });

  if (token) navigate("/");

  return (
    <div className={classes.wrapper}>
      <Helmet title={String(t("seo.forget-password"))} />
      <Container w={450} py={60}>
        <Title className={classes.title}>{t("forget-password.title")}</Title>
        <Text c="dimmed" fz="sm">
          {t("forget-password.sub-title")}
        </Text>
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <form
            onSubmit={form.onSubmit((values) => {
              console.log(values);
            })}
          >
            <TextInput
              label={t("forget-password.email")}
              placeholder="hello@gmail.com"
              {...form.getInputProps("email")}
            />
            <Group position="apart" mt="lg" className={classes.controls}>
              <Link to="/login" className={classes.control}>
                {t("forget-password.back")}
              </Link>
              <Button type="submit" className={classes.control}>
                {t("forget-password.reset-password")}
              </Button>
            </Group>
          </form>
        </Paper>
      </Container>
      <div className={classes.background} />
    </div>
  );
};

export default ForgetPasswordPage;
