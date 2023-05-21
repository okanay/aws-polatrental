import {createSlice} from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        value: false,
    },
    reducers: {
        changeLoginState : (state, action) => {
            state.value = !state.value
        },
        setLoginState : (state, action) => {
            state.value = action.payload
        },
    },
})

export const {changeLoginState, setLoginState} = loginSlice.actions

export default loginSlice.reducer