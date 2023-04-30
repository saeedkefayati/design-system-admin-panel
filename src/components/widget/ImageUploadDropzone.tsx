import { Group, Image, rem, SimpleGrid, Text } from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import ImageUpload from "~/components/illustration/ImageUpload";
import { IMAGE_UPLOAD_MAX_SIZE } from "~/constant/constant";
import { toastError } from "~/util/toast";

type ImageUploadDropzoneProps = {
  files: FileWithPath[];
  setFiles: Dispatch<SetStateAction<FileWithPath[]>>;
  isLoading: boolean;
};

const ImageUploadDropzone = ({
  files,
  setFiles,
  isLoading,
}: ImageUploadDropzoneProps) => {
  const { t } = useTranslation();

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        mih={rem(245)}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });

  return (
    <Dropzone
      maxSize={IMAGE_UPLOAD_MAX_SIZE}
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
      disabled={isLoading}
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
  );
};

export default ImageUploadDropzone;
