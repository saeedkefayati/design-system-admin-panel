import {
  Button,
  Container,
  createStyles,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import image from "./404.svg";

const useStyles = createStyles((theme) => ({
  root: {
    padding: 24,
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

const NotFound = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={String(t("seo.not-found"))} />
      <Container className={classes.root}>
        <SimpleGrid
          spacing={80}
          cols={2}
          breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
          style={{ alignItems: "center" }}
        >
          <Image src={image} className={classes.mobileImage} />
          <div>
            <Title className={classes.title}>{t("error.title")}</Title>
            <Text color="dimmed" size="lg">
              {t("error.description")}
            </Text>
            <Button
              component={Link}
              to="/"
              size="md"
              mt="xl"
              className={classes.control}
            >
              {t("error.link")}
            </Button>
          </div>
          <Image src={image} className={classes.desktopImage} />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default NotFound;
