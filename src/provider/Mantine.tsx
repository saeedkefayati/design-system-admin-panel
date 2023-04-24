import {
  ColorScheme,
  ColorSchemeProvider,
  createEmotionCache,
  MantineProvider,
} from "@mantine/core";
import { useFullscreen, useHotkeys, useLocalStorage } from "@mantine/hooks";
import { PropsWithChildren } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { languageFont } from "~/constant/Language";
import { useSettingContext } from "~/provider/Context";

const rtlCache = createEmotionCache({
  key: "rtl",
  stylisPlugins: [rtlPlugin],
});

const ProviderMantine = ({ children }: PropsWithChildren) => {
  const { dir, lang } = useSettingContext();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "theme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const { toggle: toggleFullScreen } = useFullscreen();

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  useHotkeys([["mod+f", () => toggleFullScreen()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          dir: dir,
          colorScheme,
          fontFamily: languageFont[lang],
          datesLocale: lang,
          primaryColor: "teal",
        }}
        emotionCache={dir === "rtl" ? rtlCache : undefined}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default ProviderMantine;
