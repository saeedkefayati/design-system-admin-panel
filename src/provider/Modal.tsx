import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

const ProviderModal = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();
  const theme = useMantineTheme();
  const dark = theme.colorScheme === "dark";
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <ModalsProvider
      modalProps={{
        fullScreen: isMobile,
        overlayProps: {
          style: {
            backgroundColor: dark
              ? theme.fn.rgba(theme.colors.dark[6], 0.1)
              : theme.fn.rgba(theme.colors.gray[6], 0.1),
            backdropFilter: `blur(0.25rem)`,
          },
        },
      }}
      labels={{ cancel: t("modal.cancel"), confirm: t("modal.confirm") }}
    >
      {children}
    </ModalsProvider>
  );
};

export default ProviderModal;
