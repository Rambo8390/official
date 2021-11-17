import HomePage from "./components/HomePage";
import Login from "./components/Login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Registration1 from "./components/Registration1";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: null,
        fontWeight: null,
        letterSpacing: null,
        fontSize: null,
        lineHeight: null,
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
       <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/registration1" element={<Registration1 />} />
            </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
