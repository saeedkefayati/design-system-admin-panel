import { Button, Stack } from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ImageUploadDropzone from "~/components/widget/ImageUploadDropzone";
import { UsePostTest } from "~/hook/UseTest";

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

  return (
    <Stack>
      <ImageUploadDropzone
        files={files}
        setFiles={setFiles}
        isLoading={isLoading}
      />
      <Button onClick={submitAvatar} loading={isLoading}>
        {t("profile.avatar-change")}
      </Button>
    </Stack>
  );
};

export default AvatarSection;
