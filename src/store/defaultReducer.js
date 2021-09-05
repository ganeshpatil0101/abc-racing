import { createSlice } from '@reduxjs/toolkit';

const initialState = { value :0 };
const defultSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: { 
        inc: (state) => {
            state.value++;
        },
        dec: (state) => {
            state.value--;
        }
    }
});
// export const { inc, dec } = defultSlice.actions;
export default defultSlice;

