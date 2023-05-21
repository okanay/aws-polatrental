import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        value: {
            formState: 0,
            formVisible : false
        }
    },
    reducers: {
        changeRegisterState: (state, action) => {
            state.value = {
                formState: 0,
                formVisible: !state.value.formVisible,
            }
        },
        setRegisterSlice: (state, action) => {
            state.value = {...action.payload}
        },
    },
});

export const { changeRegisterState, setRegisterSlice } = registerSlice.actions;

export default registerSlice.reducer;