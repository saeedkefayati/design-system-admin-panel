import {
  Avatar,
  Box,
  Card,
  Flex,
  Group,
  Image,
  Overlay,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import {
  IoChatboxEllipsesOutline,
  IoEyeOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { NumberCompact } from "~/util/numberFormat";

type CardBlogProps = {
  title: string;
  description: string;
  src: string;
  viewCount?: number;
  commentCount?: number;
  shareCount?: number;
  avatar?: string;
};

const CardBlog = ({
  title,
  src,
  avatar,
  description,
  viewCount,
  commentCount,
  shareCount,
}: CardBlogProps) => {
  const theme = useMantineTheme();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Box pos="relative" radioGroup="1rem">
          <Image
            height={300}
            src={src}
            alt={title}
            radius="md"
            withPlaceholder
          />
          <Overlay
            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%)"
            zIndex={0}
          />
        </Box>
      </Card.Section>
      <Box
        bg={theme.white}
        display="flex"
        sx={() => ({
          justifyContent: "flex-end",
          paddingInlineEnd: "0.5rem",
          marginBlockStart: "-2rem",
        })}
      >
        <Box
          sx={(theme) => ({
            position: "relative",
            padding: "2px",
            zIndex: 1,

            "::after": {
              content: '""',
              position: "absolute",
              inset: -2,
              borderRadius: "50%",
              border: "3px solid",
              borderInlineStartColor: theme.white,
              borderInlineEndColor: theme.black,
              borderBlockEndColor: theme.black,
              borderBlockStartColor: theme.white,
              transform: "rotate(-45deg)",
            },
          })}
        >
          <Avatar src={avatar} alt={title} size="lg" />
        </Box>
      </Box>
      <Group position="apart" mt="md" mb="xs">
        <Text lineClamp={2} weight={500}>
          {title}
        </Text>
        <Text lineClamp={2} color="gray">
          {description}
        </Text>
        {(viewCount || commentCount || shareCount) && (
          <Flex
            gap="md"
            align="center"
            justify="space-between"
            w="100%"
            wrap="wrap"
          >
            {viewCount ? (
              <Flex>
                <IoEyeOutline />
                <Space w="sm" />
                <Text>{NumberCompact(viewCount)}</Text>
              </Flex>
            ) : null}
            {shareCount ? (
              <Flex>
                <IoShareSocialOutline />
                <Space w="sm" />
                <Text>{NumberCompact(shareCount)}</Text>
              </Flex>
            ) : null}
            {commentCount ? (
              <Flex>
                <IoChatboxEllipsesOutline />
                <Space w="sm" />
                <Text>{NumberCompact(commentCount)}</Text>
              </Flex>
            ) : null}
          </Flex>
        )}
      </Group>
    </Card>
  );
};

export default CardBlog;
