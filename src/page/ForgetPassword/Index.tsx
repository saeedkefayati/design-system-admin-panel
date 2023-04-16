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
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { getTokenStorage } from "~/util/storage";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(26),
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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

const ForgetPassword = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const token = getTokenStorage();
  const { t } = useTranslation();

  if (token) navigate("/");

  return (
    <>
      <Helmet title={String(t("seo.forget-password"))} />
      <Container size={460} my={30}>
        <Title className={classes.title} align="center">
          {t("forget-password.title")}
        </Title>
        <Text c="dimmed" fz="sm" ta="center">
          {t("forget-password.sub-title")}
        </Text>
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <TextInput
            label={t("forget-password.email")}
            placeholder="hello@gmail.com"
            required
          />
          <Group position="apart" mt="lg" className={classes.controls}>
            <Link to="/login" className={classes.control}>
              {t("forget-password.back")}
            </Link>
            <Button className={classes.control}>
              {t("forget-password.reset-password")}
            </Button>
          </Group>
        </Paper>
      </Container>
    </>
  );
};

export default ForgetPassword;
