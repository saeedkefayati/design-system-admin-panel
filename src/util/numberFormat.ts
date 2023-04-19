import { getStorageItem } from "~/util/storage";

const NumberCompact = (number: number) => {
  const lang = getStorageItem("lang") ?? "fa";
  return new Intl.NumberFormat(lang, {
    notation: "compact",
    compactDisplay: "short",
  }).format(number);
};

export { NumberCompact };
