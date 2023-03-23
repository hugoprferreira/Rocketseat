import { ThemeProvider } from "styled-components";
import { Button } from './components/Button';

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
<ThemeProvider>
<Button variant="success" />
<Button variant="danger" />
<Button />

<GlobalStyle />
</ThemeProvider>
)
}
