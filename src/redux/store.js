import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./slice/loginSlice"
import registerReducer from "./slice/registerSlice"
import mobileMenuReducer from "./slice/mobileMenuSlice"
import carsPageNavigationReducer from "./slice/carsPageNavigationSlice"
import carsContactReducer from "./slice/carsContactSlice"

export default configureStore({
    reducer: {
        loginSlice : loginReducer,
        registerSlice : registerReducer,
        mobileMenu : mobileMenuReducer,
        carsPageNavigation : carsPageNavigationReducer,
        carsContact : carsContactReducer
    },
})