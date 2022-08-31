import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	login: localStorage.getItem('user') || null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers : {
		setLogin(state, action) {
			state.login = action.payload
		},
	}
})

export const {setLogin} = userSlice.actions

export default userSlice.reducer