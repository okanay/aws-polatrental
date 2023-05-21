import {createSlice} from '@reduxjs/toolkit'

export const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState: {
        value: 1,
    },
    reducers: {
        nextPage : (state, action) => {
            const carsCount = action.payload.totalCarsCount
            const maxPageCount = Math.ceil(carsCount / action.payload.singleShowCount)

            if (state.value + 1 > maxPageCount)
            {
                console.log(carsCount + " next")
                console.log(maxPageCount + " next")
            }
            else
            {
                state.value += 1
            }
        },
        prevPage : (state, action) => {
            const carsCount = action.payload.totalCarsCount
            const maxPageCount = carsCount / action.payload.singleShowCount

            if (state.value - 1 < 1)
            {
                console.log(carsCount + " prev")
                console.log(maxPageCount + " prev")
                console.log('min page')
            }
            else
            {
                state.value -= 1
            }
        },
        setPage : (state, action) => {
            state.value = action.payload
        },
    },
})

export const {nextPage, prevPage, setPage} = mobileMenuSlice.actions

export default mobileMenuSlice.reducer