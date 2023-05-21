import {createSlice} from '@reduxjs/toolkit'

export const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState: {
        value: false,
    },
    reducers: {
        changeMobileMenuState : (state, action) => {
            state.value = !state.value
        },
        setMobileMenuState : (state, action) => {
            state.value = action.payload
        },
    },
})

export const {changeMobileMenuState, setMobileMenuState} = mobileMenuSlice.actions

export default mobileMenuSlice.reducer