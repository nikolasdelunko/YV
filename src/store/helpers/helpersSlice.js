import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	burger: false,
	mobile: true,
	about: false,
	login:	localStorage.getItem('user') ||false,
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
		openAbout(state, action) {
			state.about = action.payload
		},
		setLogin(state, action) {
			state.login = action.payload
		},
	}
})

export const {addMobile, openBurger, openAbout, setLogin} = userSlice.actions

export default userSlice.reducer