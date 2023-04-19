import { Chart } from "chart.js";
import { I18nextProvider } from "react-i18next";
import { languageFont } from "~/constant/Language";
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

//chart js config
Chart.defaults.font.family = languageFont[i18next.language];
Chart.defaults.locale = i18next.language;
Chart.defaults.responsive = true;
Chart.defaults.plugins.title.align = i18next.dir() === "rtl" ? "end" : "start";
Chart.defaults.plugins.legend.align = i18next.dir() === "rtl" ? "end" : "start";
Chart.defaults.plugins.tooltip.position = "nearest";
Chart.defaults.elements.line.tension = 0.4;

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
