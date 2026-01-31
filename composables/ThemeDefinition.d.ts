export default interface ThemeDefinition {
  dark: boolean;
  colors: {
    background: string;
    surface: string;
    primary: string;
    "primary-darken-1": string;
    secondary: string;
    "secondary-darken-1": string;
    error: string;
    info: string;
    success: string;
    warning: string;
  };
}
