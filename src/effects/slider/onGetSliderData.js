import {call, put, takeLatest } from 'redux-saga/effects';
import {fetchSlidersData} from '../../api/slider';
import {ACTIONS} from '../../data/slider';

function* getSlidersData({payload}) {
    console.log('===> callied ----------- getSlidersData', payload);
    try {
        const slidersData = yield call(fetchSlidersData, payload);
        console.log('====== got response ', slidersData);
        yield put(ACTIONS.getSlidersDataSuccess(slidersData));
    } catch(e){
        // TODO create generic error state to manage error bounderies
        console.error('err ', e);
    }
}
export default function* onGetSliderData() {
    console.log('=================== onGetSliderData ', ACTIONS);
    yield takeLatest(ACTIONS.getSlidersData.type, getSlidersData);
}