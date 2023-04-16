import i18next from "i18next";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const initialValue = {
  dir: i18next.dir(),
  lang: i18next.language,
};

const ContextState = createContext(initialValue);
const ContextSetState = createContext<any>(initialValue);

const useSettingContext = () => {
  return useContext(ContextState);
};

const useSetSettingContext = () => {
  return useContext(ContextSetState);
};

const ProviderContext = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();
  const [setting, setSetting] = useState(initialValue);
  // setStorageItem('lang', setting.lang);
  // setStorageItem('dir', setting.dir);

  return (
    <ContextState.Provider value={setting}>
      <ContextSetState.Provider value={setSetting}>
        <Helmet
          htmlAttributes={setting}
          titleTemplate={`${t("seo.title")} - %s`}
        />
        {children}
      </ContextSetState.Provider>
    </ContextState.Provider>
  );
};

export { useSettingContext, useSetSettingContext };
export default ProviderContext;
