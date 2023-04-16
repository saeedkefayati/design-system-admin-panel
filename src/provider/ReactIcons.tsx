import { PropsWithChildren } from "react";
import { IconContext } from "react-icons";

const ProviderReactIcons = ({ children }: PropsWithChildren) => {
  return (
    <IconContext.Provider value={{ size: "1.5rem" }}>
      {children}
    </IconContext.Provider>
  );
};

export default ProviderReactIcons;
