import { createSlice, createAction } from "@reduxjs/toolkit";
import {cloneDeep} from "lodash";
const SLIDER_ACTION = { 
    getSlidersData: createAction('slider/getSlidersData'),
    getSlidersDataSuccess: createAction('slider/getSlidersDataSuccess'),
};
const actions = {
    ...SLIDER_ACTION,
};
const sliderSlice = createSlice({
    name:'slider',
    initialState:{
        sliderData: {}
    },
    reducers:{
        getSlidersDataSuccess: (state, payload) => {
            const res = payload.payload;
            console.log('----------res  ', res);
            state.sliderData = res.data;
        },
    }
});
export const ACTIONS = {
    ...actions,
    ...sliderSlice.actions
}
export default sliderSlice;
