import { getStorageItem } from "./storage";

const DateCompact = (date: Date) => {
  const lang = getStorageItem("lang") ?? "fa";
  return date.toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const TimeCompact = (date: Date) => {
  const lang = getStorageItem("lang") ?? "fa";
  return date.toLocaleTimeString(lang, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export { DateCompact, TimeCompact };
