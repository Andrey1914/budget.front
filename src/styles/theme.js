import { createTheme } from "@mui/material";

export const theme = createTheme({
  fonts: {
    montserrat: "'Montserrat', sans-serif",
    cardo: "'Cardo', serif",
  },
  typography: {
    fontSize: [8, 12, 16, 18, 24, 32],
  },
  spacing: [0, 4, 8, 16, 32, 64, 128],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
