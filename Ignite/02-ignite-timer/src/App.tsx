import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";

import { GlobalStyle } from "./styles/themes/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  );
}
