import {call, put, takeLatest } from 'redux-saga/effects';
import {fetchSlidersData} from '../../api/slider';
import {ACTIONS} from '../../data/slider';

function* getSlidersData({payload}) {
    try {
        const slidersData = yield call(fetchSlidersData, payload);
        yield put(ACTIONS.getSlidersDataSuccess(slidersData));
    } catch(e){
        // TODO create generic error state to manage error bounderies
        console.error('err ', e);
    }
}
export default function* onGetSliderData() {
    yield takeLatest(ACTIONS.getSlidersData.type, getSlidersData);
}