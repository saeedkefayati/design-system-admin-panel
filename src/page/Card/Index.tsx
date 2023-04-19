import { Grid, Skeleton } from "@mantine/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CardBlog from "~/components/widget/CardBlog";
import CardBlogBackground from "~/components/widget/CardBlogBackground";
import CardProduct from "~/components/widget/CardProduct";
import CustomBreadcrumb from "~/components/widget/CustomBreadcrumb";
import { UseTest } from "~/hook/UseTest";

const Card = () => {
  const { isLoading } = UseTest();
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={String(t("seo.card"))} />
      <CustomBreadcrumb>
        <Link to="/card">{t("card.title")}</Link>
      </CustomBreadcrumb>
      <Grid gutter="md">
        <Grid.Col sm={6} md={6} lg={4}>
          <Skeleton visible={isLoading}>
            <CardProduct
              title="Norway Fjord Adventures"
              description="With Fjord Tours you can explore more of the magical fjord landscapes
                with tours and activities on and around the fjords of Norway"
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            />
          </Skeleton>
        </Grid.Col>
        <Grid.Col sm={6} md={6} lg={4}>
          <Skeleton visible={isLoading}>
            <CardProduct
              title="Norway Fjord Adventures"
              src="https://api-prod-minimal-v4.vercel.app/assets/images/products/product_21.jpg"
              price={200}
              onSale
            />
          </Skeleton>
        </Grid.Col>
        <Grid.Col sm={6} md={6} lg={4}>
          <Skeleton visible={isLoading}>
            <CardBlog
              date="4/19/2023, 4:20:18 PM"
              description="With Fjord Tours you can explore more of the magical fjord landscapes
                with tours and activities on and around the fjords of Norway"
              title="Norway Fjord Adventures"
              src="https://api-prod-minimal-v4.vercel.app/assets/images/products/product_21.jpg"
              avatar="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          </Skeleton>
        </Grid.Col>
        <Grid.Col sm={6} md={6} lg={4}>
          <Skeleton visible={isLoading}>
            <CardBlog
              date="4/19/2023, 4:20:18 PM"
              viewCount={123456789}
              commentCount={2345678}
              // shareCount={354897}
              description="With Fjord Tours you can explore more of the magical fjord landscapes
                with tours and activities on and around the fjords of Norway"
              title="Norway Fjord Adventures"
              src="https://api-prod-minimal-v4.vercel.app/assets/images/products/product_21.jpg"
              avatar="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          </Skeleton>
        </Grid.Col>
        <Grid.Col sm={6} md={6} lg={4}>
          <Skeleton visible={isLoading}>
            <CardBlogBackground
              viewCount={123456789}
              commentCount={2345678}
              // shareCount={354897}
              description="With Fjord Tours you can explore more of the magical fjord landscapes
                with tours and activities on and around the fjords of Norway"
              title="Norway Fjord Adventures"
              src="https://api-prod-minimal-v4.vercel.app/assets/images/products/product_21.jpg"
              avatar="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          </Skeleton>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Card;
