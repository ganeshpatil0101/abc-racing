import { all, fork} from 'redux-saga/effects';
import onGetSliderData from './onGetSliderData';

function* sliderSaga() {
    yield all([
        // fork here work as non-blocking task 
        fork(onGetSliderData)
    ]);
}
export default sliderSaga;