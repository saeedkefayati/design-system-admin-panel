import { Input, Paper, useMantineTheme } from "@mantine/core";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ReactQuill from "react-quill";
import { richTextToolbar } from "~/constant/RichText";

import "~/asset/react-quill.css";

type Props = {
  error: string | undefined;
  onBlur: () => {};
  onChange: (val: any) => {};
  onFocus: () => {};
  value: string | undefined | null;
};

const RichTextEditor = (props: any) => {
  const { t } = useTranslation();
  const theme = useMantineTheme();

  const modules = useMemo(
    () => ({
      toolbar: {
        //handlers: { image: imageHandler },
        container: richTextToolbar,
      },
    }),
    []
  );

  return (
    <>
      <Input.Wrapper label={t("add-blog.post-content")} withAsterisk>
        <Input.Description mb={5}>
          {t("add-blog.post-content-description")}
        </Input.Description>
        <Paper radius="sm">
          <ReactQuill
            modules={modules}
            // formats={richTextFormat}
            theme="snow"
            // value={value}
            // onChange={setValue}
            // defaultValue={defaultValue}
            style={{
              border: props.error ? `1px solid  ${theme.colors.red[6]}` : "",
            }}
            {...props}
          />
          <Input.Error mt={5}>
            {props.error !== undefined ? props.error : null}
          </Input.Error>
        </Paper>
      </Input.Wrapper>
    </>
  );
};

export default RichTextEditor;
