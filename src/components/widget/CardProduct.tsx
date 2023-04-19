import { Badge, Box, Card, Group, Image, Text } from "@mantine/core";
import { currency } from "~/constant/Language";
import { useSettingContext } from "~/provider/Context";

type CardProduct = {
  title: string;
  src?: string;
  description?: string;
  price?: number;
  onSale?: boolean;
};

const CardProduct = ({
  title,
  src,
  description,
  price,
  onSale,
}: CardProduct) => {
  const { dir } = useSettingContext();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section p="md">
        <Box pos="relative">
          <Image
            height={300}
            src={src}
            alt={title}
            radius="md"
            withPlaceholder
          />
          {onSale ? (
            <Badge
              color="red"
              pos="absolute"
              variant="filled"
              top={16}
              right={16}
            >
              On Sale
            </Badge>
          ) : null}
        </Box>
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text lineClamp={1} weight={500}>
          {title}
        </Text>
      </Group>
      <Text lineClamp={2} size="sm" color="gray">
        {description}
      </Text>
      {price ? (
        <Text weight={500}>
          {price}
          &nbsp;
          {dir === "rtl" ? currency.IRR : currency.USD}
        </Text>
      ) : null}
    </Card>
  );
};

export default CardProduct;
