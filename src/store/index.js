import {configureStore} from '@reduxjs/toolkit'
import helpersSlice from './helpers'


export default configureStore({
    reducer: {
        helpers: helpersSlice,
    }
})