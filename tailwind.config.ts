import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      anekBangla: ['"AnekBangla"', ...defaultTheme.fontFamily.sans],
      inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "rb-blue": {
          50: "#677294",
          100: "#0F2851",
        },
        "rb-green": {
          5: "#EAF1EE",
          50: "#508976",
          200: "#246C54",
          100: "#00984A",
        },
        "rb-success": {
          200: "#00BD7E",
          100: "#34C759",
        },
        "rb-red": {
          50: "#FBECEC",
          100: "#E51F25",
        },
        "rb-gray": {
          50: "#EAECF0",
          100: "#EFEEEE",
        },
        "rb-black": {
          50: "#667085",
          75: "#475467",
          100: "#344054",
          200: "#001C12",
        },
        "rb-dark": {
          50: "#717171",
          100: "#062126",
        },
        "rb-yellow": {
          100: "#F6D060",
        },
        "rb-orange": {
          100: "#F79009",
        },
        "rb-white": {
          100: "#FFFFFF",
        },
        "rb-bg": {
          100: "#FCFFFE",
        },
      },
      fontSize: {
        "rb-display-lg": [
          "2rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "rb-display-sm": [
          "1.5rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "rb-display-xs": [
          "1.2rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "rb-header-lg": [
          "1.2rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "rb-header-sm": [
          "1.15rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "rb-header-xs": [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        "rb-body-p1": [
          "1.25rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "rb-body-p1-hi": [
          "1.25rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        "rb-body-p2": [
          "1.125rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "rb-body-p2-hi": [
          "1.125rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        "rb-body-p3": [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "rb-body-p3-hi": [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        "rb-body-p4": [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "rb-body-p5": [
          "0.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "rb-body-p5-hi": [
          "0.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        "rb-body-p6": [
          "0.688rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "rb-body-p7": [
          "0.625rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        "rb-lead": [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
      },
      borderWidth: {
        "1": "1px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "480px",
        xxlMax: { max: "1535px" },
        xlMax: { max: "1279px" },
        lgMax: { max: "1023px" },
        mdMax: { max: "767px" },
        smMax: { max: "639px" },
        xsMax: { max: "479px" },
      },
      boxShadow: {
        "rb-shadow-1": "0px 4px 24px 0px rgba(0, 0, 0, 0.04)",
        "rb-shadow-2": "0px 16px 10px -9px rgba(0, 0, 0, 0.12)",
        "rb-shadow-3": "0px 5px 6px -3px rgba(0, 0, 0, 0.12)",
        "rb-shadow-4": "0px 10px 30px 0px rgba(178, 178, 178, 0.20)",
        "rb-shadow-5": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
