import { Chart } from "chart.js";
import i18next from "i18next";
import { languageFont } from "~/constant/Language";

const setAlign = (dir: string) => {
  return dir === "rtl" ? "end" : "start";
};

//chart js config
Chart.defaults.font.family = languageFont[i18next.language];
Chart.defaults.locale = i18next.language;
Chart.defaults.responsive = true;
if (Chart.defaults.plugins.title !== undefined) {
  Chart.defaults.plugins.title.align = setAlign(i18next.dir());
}
if (Chart.defaults.plugins.legend !== undefined) {
  Chart.defaults.plugins.legend.align = setAlign(i18next.dir());
}
if (Chart.defaults.plugins.tooltip !== undefined) {
  Chart.defaults.plugins.tooltip.position = "nearest";
}
if (Chart.defaults.elements.line !== undefined) {
  Chart.defaults.elements.line.tension = 0.4;
}
