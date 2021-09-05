import React, {lazy, Suspense} from "react";
import { ThemeProvider } from 'styled-components';
const Navbar = lazy(() => import('./components/Navbar'));
const theme = JSON.parse(localStorage.getItem('theme'));
function App() {
  return (
    <Suspense fallback={<span> Loading </span>} >
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </Suspense>
    );
}

export default App;
