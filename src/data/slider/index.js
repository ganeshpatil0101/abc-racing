import { createSlice, createAction } from "@reduxjs/toolkit";
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
            state.sliderData = res.results[0];
        },
    }
});
export const ACTIONS = {
    ...actions,
    ...sliderSlice.actions
}
export default sliderSlice;
