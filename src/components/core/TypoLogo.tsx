import styled from "@emotion/styled";
import { useMantineTheme } from "@mantine/core";
import { useTranslation } from "react-i18next";

const StyledSvg = styled.svg`
  & {
    text {
      text-transform: uppercase;
      animation: stroke 2s alternate;
      stroke-width: 2;
      stroke: ${({ theme }) =>
        theme.colorScheme === "dark"
          ? theme.colors.gray[5]
          : theme.primaryColor};
      fill: ${({ theme }) =>
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.primaryColor};
      font-size: 50px;
    }
  }
  @keyframes stroke {
    0% {
      fill: ${({ theme }) =>
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[0]};
      stroke: ${({ theme }) =>
        theme.colorScheme === "dark"
          ? theme.colors.gray[5]
          : theme.primaryColor};
      stroke-dashoffset: 25%;
      stroke-dasharray: 0 50%;
      stroke-width: 2;
    }
    70% {
      fill: ${({ theme }) =>
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[0]};
      stroke: ${({ theme }) =>
        theme.colorScheme === "dark"
          ? theme.colors.gray[5]
          : theme.primaryColor};
    }
    80% {
      fill: ${({ theme }) =>
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[0]};
      stroke: ${({ theme }) =>
        theme.colorScheme === "dark"
          ? theme.colors.gray[5]
          : theme.primaryColor};
      stroke-width: 3;
    }
    100% {
      fill: ${({ theme }) =>
        theme.colorScheme === "dark"
          ? theme.colors.gray[5]
          : theme.primaryColor};
      stroke: ${({ theme }) =>
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[0]};
      stroke-dashoffset: -25%;
      stroke-dasharray: 50% 0;
      stroke-width: 0;
    }
  }
`;

const TypoLogo = () => {
  const theme = useMantineTheme();
  const { t } = useTranslation();

  return (
    <svg className="fade-in">
      <text
        x="50%"
        y="50%"
        dy="0.35em"
        textAnchor="middle"
        fill={theme.primaryColor}
      >
        {t("seo.title")}
      </text>
    </svg>
  );
};

export default TypoLogo;
