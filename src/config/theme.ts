import { createTheme } from "@mui/material/styles";

interface IMPaletteMainOption {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
}

interface IMPaletteColorOptions extends IMPaletteMainOption {
  background?: string;
  border?: string;
}

interface IMPaletteStateColorOptions extends IMPaletteMainOption {
  textDark?: string;
  lightBg?: string;
  border?: string;
}

interface IMPaletteOtherColor {
  divider: string;
  background: string;
  stroke?: string;
  backdrop?: string;
  snackbar?: string;
  activeRating?: string;
  ongoing?: string;
}

interface IMPaletteIMActionsColor {
  active?: string;
  hover?: string;
  selected?: string;
  disabled?: string;
  disabledBackground?: string;
  focus?: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    IMPrimary: IMPaletteColorOptions;
    IMSecondary: IMPaletteColorOptions;
    IMSuccess: IMPaletteStateColorOptions;
    IMInfo: IMPaletteStateColorOptions;
    IMWarning: IMPaletteStateColorOptions;
    IMError: IMPaletteStateColorOptions;
    IMOther: IMPaletteOtherColor;
    IMActions: IMPaletteIMActionsColor;
  }
  interface PaletteOptions {
    IMPrimary?: IMPaletteColorOptions;
    IMSecondary?: IMPaletteColorOptions;
    IMSuccess?: IMPaletteStateColorOptions;
    IMInfo?: IMPaletteStateColorOptions;
    IMWarning?: IMPaletteStateColorOptions;
    IMError?: IMPaletteStateColorOptions;
    IMOther: IMPaletteOtherColor;
    IMActions: IMPaletteIMActionsColor;
  }
}

const theme = createTheme({
  spacing: 4,
  palette: {
    divider: "#E3E3E3",
    text: {
      primary: "#1D1D1D",
      secondary: "#686868",
      disabled: "#8D8D8D",
    },
    IMPrimary: {
      main: "#F15927",
      dark: "#B72300",
      light: "#FF8B54",
      background: "#FEF2EE",
      border: "#E99D84",
      contrastText: "#FFFFFF",
    },
    IMSecondary: {
      main: "#26A69A",
      dark: "#00766C",
      light: "#64D8CB",
      background: "#F6F6F6",
      border: "#84C4BE",
      contrastText: "#FFFFFF",
    },
    IMSuccess: {
      main: "#4CAF50",
      dark: "#3B873E",
      light: "#7BC67E",
      textDark: "#1E4620",
      lightBg: "#EDF7ED",
      border: "#97C899",
      contrastText: "#FFFFFF",
    },
    IMInfo: {
      main: "#2196F3",
      dark: "#0B79D0",
      light: "#64B6F7",
      textDark: "#0D3C61",
      lightBg: "#E9F4FE",
      border: "#81BCEA",
      contrastText: "#FFFFFF",
    },
    IMWarning: {
      main: "#FF9800",
      dark: "#C77700",
      light: "#FFB547",
      textDark: "#663D00",
      lightBg: "#FFF5E5",
      border: "#F1BD71",
      contrastText: "#1D1D1D",
    },
    IMError: {
      main: "#F44336",
      dark: "#E31B0C",
      light: "#F88078",
      textDark: "#621B16",
      lightBg: "#FEECEB",
      border: "#EB928C",
      contrastText: "#FFFFFF",
    },
    IMActions: {
      active: "#F15927",
      hover: "#B72300",
      selected: "#B72300",
      disabled: "#BDBDBD",
      disabledBackground: "#E0E0E0",
      focus: "#F15927",
    },
    IMOther: {
      stroke: "#C4C4C4",
      divider: "#E0E0E0",
      backdrop: "#E0E0E0",
      snackbar: "#323232",
      activeRating: "#FFB400",
      background: "#F6F6F6",
      ongoing: "#512DA8",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#D5D5D5",
      A200: "#AAAAAA",
      A400: "#616161",
      A700: "#303030",
    },
  },
});

export default theme;
