import { I18nextProvider } from "react-i18next";
import ErrorBoudary from "~/ErrorBoudary";
import i18next from "~/i18n";
import ProviderContext from "~/provider/Context";
import ProviderMantine from "~/provider/Mantine";
import ProviderModal from "~/provider/Modal";
import ProviderNotification from "~/provider/Notification";
import ProviderReactIcons from "~/provider/ReactIcons";
import ProviderReactQuery from "~/provider/ReactQuery";
import ProviderRouter from "~/provider/Router";

import "~/asset/style.css";
import "~/provider/Chart";

const App = () => {
  return (
    <ErrorBoudary>
      <ProviderContext>
        <I18nextProvider i18n={i18next}>
          <ProviderMantine>
            <ProviderModal>
              <ProviderReactQuery>
                <ProviderNotification />
                <ProviderReactIcons>
                  <ProviderRouter />
                </ProviderReactIcons>
              </ProviderReactQuery>
            </ProviderModal>
          </ProviderMantine>
        </I18nextProvider>
      </ProviderContext>
    </ErrorBoudary>
  );
};

export default App;
