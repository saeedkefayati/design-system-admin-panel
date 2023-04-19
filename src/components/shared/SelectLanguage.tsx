import { ActionIcon, Menu } from "@mantine/core";
import i18next from "i18next";
import { IoLanguageOutline } from "react-icons/io5";
import { useSetSettingContext } from "~/provider/Context";
import { setStorageItem } from "~/util/storage";

const SelectLanguage = () => {
  const setState = useSetSettingContext();
  const ChangeLanguage = (lang: string, dir: string) => {
    setState({ lang, dir });
    setStorageItem("dir", dir);
    setStorageItem("lang", lang);
    i18next.changeLanguage(lang);
  };

  return (
    <Menu shadow="md" position="bottom-end">
      <Menu.Target>
        {/* <Tooltip label="Ctrl + J"> */}
        <ActionIcon color="dark" variant="subtle" size="lg">
          <IoLanguageOutline />
        </ActionIcon>
        {/* </Tooltip> */}
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => ChangeLanguage("en", "ltr")}>
          English
        </Menu.Item>
        <Menu.Item onClick={() => ChangeLanguage("fa", "rtl")}>
          Persian
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default SelectLanguage;
