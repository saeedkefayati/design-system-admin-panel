import {
  Avatar,
  BackgroundImage,
  Box,
  Flex,
  Overlay,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import {
  IoChatboxEllipsesOutline,
  IoEyeOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { NumberCompact } from "~/util/numberFormat";

type CardBlogBackgroundProps = {
  title: string;
  description: string;
  src: string;
  viewCount?: number;
  commentCount?: number;
  shareCount?: number;
  avatar?: string;
};

const CardBlogBackground = ({
  title,
  src,
  avatar,
  description,
  viewCount,
  commentCount,
  shareCount,
}: CardBlogBackgroundProps) => {
  const theme = useMantineTheme();

  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        border: `0.0625rem solid ${theme.colors.gray[3]}`,
        borderRadius: theme.radius.md,
      })}
    >
      <BackgroundImage h={230} display="flex" src={src} radius="md">
        <Overlay
          display="flex"
          gradient="linear-gradient(0deg, rgba(0,0,0,0.6) 15%,
           rgba(128,128,128,0.5) 60%, rgba(255,255,255,0.6) 100%)"
          blur={2.5}
          zIndex={0}
          radius="md"
          p="md"
          sx={() => ({
            alignItems: "center",
          })}
        >
          <Stack>
            <Flex justify="flex-start">
              <Avatar
                src={avatar}
                alt={title}
                size={48}
                sx={() => ({
                  border: `2px solid ${theme.black}`,
                  borderRadius: "50%",
                  padding: "1px",
                })}
              />
            </Flex>
            <Flex gap="xs" direction="column">
              <Text lineClamp={2} weight={500}>
                {title}
              </Text>
              <Text lineClamp={2} color={theme.colors.gray[1]}>
                {description}
              </Text>
            </Flex>
            {(viewCount || commentCount || shareCount) && (
              <Flex
                gap="md"
                align="center"
                justify="space-between"
                w="100%"
                wrap="wrap"
              >
                {viewCount ? (
                  <Flex align="center" gap={10}>
                    <IoEyeOutline size={16} color={theme.white} />
                    <Text color={theme.white} size="sm">
                      {NumberCompact(viewCount)}
                    </Text>
                  </Flex>
                ) : null}
                {shareCount ? (
                  <Flex align="center" gap={10}>
                    <IoShareSocialOutline size={16} color={theme.white} />
                    <Text color={theme.white} size="sm">
                      {NumberCompact(shareCount)}
                    </Text>
                  </Flex>
                ) : null}
                {commentCount ? (
                  <Flex align="center" gap={10}>
                    <IoChatboxEllipsesOutline size={16} color={theme.white} />
                    <Text color={theme.white} size="sm">
                      {NumberCompact(commentCount)}
                    </Text>
                  </Flex>
                ) : null}
              </Flex>
            )}
          </Stack>
        </Overlay>
      </BackgroundImage>
    </Box>
  );
};

export default CardBlogBackground;
