import React, {lazy, Suspense} from "react";
import { ThemeProvider } from 'styled-components';

const Navbar = lazy(() => import('./components/Navbar'));
const Slider = lazy(() => import('./pages/Slider'));
const TopRacers = lazy(() => import('./pages/TopRacers'));
const Fixtures = lazy(() => import('./pages/Fixtures'));

const theme = JSON.parse(localStorage.getItem('theme'));
function App() {
  return (
    <Suspense fallback={<span> Loading </span>} >
      <ThemeProvider theme={theme}>
          <Navbar />
          <Slider />
          <TopRacers />
          <Fixtures />
      </ThemeProvider>
    </Suspense>
    );
}

export default App;
