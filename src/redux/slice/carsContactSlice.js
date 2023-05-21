
import { createSlice } from '@reduxjs/toolkit'

export const carsContactSlice = createSlice({
    name: 'carsContact',
    initialState: {
        value: {
            formState: 0,
            formVisible : false,
            data : {}
        }
    },
    reducers: {
        changeCarsContactVisible: (state, action) => {
            state.value = {
                formState: state.value.formState,
                formVisible: !state.value.formVisible,
                data : {...state.value.data}
            }
        },
        changeCarsContactData: (state, action) => {
            state.value = {
                formState: state.value.formState,
                formVisible: state.value.formVisible,
                data : {...action.payload}
            }
        },
        changeCarsContactState: (state, action) => {
            state.value = {
                formState: action.payload,
                formVisible: state.value.formVisible,
                data : {...state.value.data}
            }
        },
        setCarsContactVisible: (state, action) => {
            state.value = {
                formState: state.value.formState,
                formVisible: action.payload,
                data : {...state.value.data}
            }
        },
    },
});

export const { changeCarsContactVisible,changeCarsContactData, changeCarsContactState, setCarsContactVisible } = carsContactSlice.actions;

export default carsContactSlice.reducer;