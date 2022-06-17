import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	burger: false,
	mobile: true,
}

const userSlice = createSlice({
	name: 'helpers',
	initialState,
	reducers : {
		addMobile(state, action) {
			state.mobile = action.payload
		},
		openBurger(state, action) {
			state.burger = action.payload
		},
	}
})

export const {addMobile, openBurger} = userSlice.actions

export default userSlice.reducer