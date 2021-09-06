import React, {lazy, Suspense} from "react";
import { ThemeProvider } from 'styled-components';
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { useDispatch, useSelector} from 'react-redux';
import sliderSlice from './data/slider';
import sliderSaga from './effects/slider';
import {ACTIONS} from './data/slider';
const Navbar = lazy(() => import('./components/Navbar'));
const Slider = lazy(() => import('./pages/Slider'));
const TopRacers = lazy(() => import('./pages/TopRacers'));
const Fixtures = lazy(() => import('./pages/Fixtures'));

const theme = JSON.parse(localStorage.getItem('theme'));
function App() {
  useInjectReducer({key:'slider', reducer: sliderSlice.reducer});
  useInjectSaga({key:'slider', saga: sliderSaga});
  const dispatch = useDispatch();
  const sliderData = useSelector((state)=> state?.slider?.sliderData);
  React.useEffect(()=>{
    dispatch(ACTIONS.getSlidersData())
  }, []);
  React.useEffect(() =>{
    console.log(' sliderData ', sliderData);
  }, [sliderData]);
  return (
    <Suspense fallback={<span> Loading </span>} >
      <ThemeProvider theme={theme}>
        <div data-testid="app-container">
          <Navbar />
          <Slider />
          <TopRacers />
          <Fixtures />
        </div>
      </ThemeProvider>
    </Suspense>
    );
}

export default App;
