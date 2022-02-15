import React, { createContext } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const TemplateContext = createContext(null);

const TemplateProvider = ({ children }) => {
  const theme = createTheme({
    overrides: {
      MuiDrawer: {
        paperAnchorLeft: {
          height: "95%",
          top: 18,
          width: "26%",
          left: 63,
          boxShadow: "none",
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: "unset",
        },
      },
    },
  });

  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
