import {
  Button,
  Group,
  Image,
  rem,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ImageUpload from "~/components/illustration/ImageUpload";
import { UsePostTest } from "~/hook/UseTest";
import { toastError } from "~/util/toast";

const AvatarSection = () => {
  const { t } = useTranslation();
  const { mutate, isLoading, isSuccess } = UsePostTest();
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const submitAvatar = () => {
    mutate({ title: "foo", body: "bar", userId: 1 });
    setTimeout(() => {
      if (isSuccess) {
        setFiles([]);
      }
    }, 2000);
  };

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });

  return (
    <Stack>
      <Dropzone
        maxSize={3 * 1024 * 1024}
        maxFiles={1}
        multiple={false}
        accept={IMAGE_MIME_TYPE}
        onDrop={setFiles}
        onReject={(files) => {
          console.error(files);
          toastError({
            title: t("profile.avatar-error-title"),
            message: t("profile.avatar-error-description"),
          });
          setFiles([]);
        }}
        loading={isLoading}
      >
        {previews.length > 0 ? (
          <SimpleGrid
            cols={1}
            breakpoints={[
              { minWidth: "xs", cols: 3 },
              { minWidth: "sm", cols: 2 },
              { minWidth: "md", cols: 3 },
              { minWidth: "xl", cols: 4 },
            ]}
          >
            {previews}
          </SimpleGrid>
        ) : (
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: rem(245), pointerEvents: "none" }}
          >
            <ImageUpload width="200" height="200" />
            <div>
              <Text size="xl" inline>
                {t("profile.avatar-dropzone-title")}
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                {t("profile.avatar-dropzone-description")}
              </Text>
            </div>
          </Group>
        )}
      </Dropzone>
      <Button onClick={submitAvatar} loading={isLoading}>
        {t("profile.avatar-change")}
      </Button>
    </Stack>
  );
};

export default AvatarSection;
