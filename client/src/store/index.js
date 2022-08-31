import {configureStore} from '@reduxjs/toolkit'
import helpersSlice from './helpers'
import userSlice from './user'


export default configureStore({
    reducer: {
        helpers: helpersSlice,
        user: userSlice,
    }
})