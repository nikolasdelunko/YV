import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: null,
  touch: false,
  hardSkills: null,
  text: null,
  touchText: false,
  projects: null,
  project: null,
  changeProject: false,
  touchProjects: false,
  education: null,
  touchEducation: false,
  workExp: null,
  workExpCurrent: null,
  changeWorkExp: false,
  touchWorkExp: false,
  certificates: null,
  touchCertificates: false,
  contacts: null,
  contact: null,
  touchContacts: false,
  changeContacts: false,
};

const userSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    addSkills(state, action) {
      state.skills = action.payload;
    },
    addHardSkills(state, action) {
      state.hardSkills = action.payload;
    },
    addTouch(state, action) {
      state.touch = action.payload;
    },
    addText(state, action) {
      state.text = action.payload;
    },
    addTouchText(state, action) {
      state.touchText = action.payload;
    },
    addProjects(state, action) {
      state.projects = action.payload;
    },
    addProject(state, action) {
      state.project = action.payload;
    },
    setChangeProject(state, action) {
      state.changeProject = action.payload;
    },
    addTouchProjects(state, action) {
      state.touchProjects = action.payload;
    },
    addEducation(state, action) {
      state.education = action.payload;
    },
    setTouchEducation(state, action) {
      state.touchEducation = action.payload;
    },
    addWorkExp(state, action) {
      state.workExp = action.payload;
    },
		addWorkExpCurrent(state, action) {
      state.workExpCurrent = action.payload;
    },
    setTouchWorkExp(state, action) {
      state.touchWorkExp = action.payload;
    },
		setChangeWorkExp(state, action) {
      state.changeWorkExp = action.payload;
    },
    addCertificates(state, action) {
      state.certificates = action.payload;
    },
    setTouchCertificates(state, action) {
      state.touchCertificates = action.payload;
    },
    addContacts(state, action) {
      state.contacts = action.payload;
    },
    addContact(state, action) {
      state.contact = action.payload;
    },
    setTouchContacts(state, action) {
      state.touchContacts = action.payload;
    },
    setChangeContacts(state, action) {
      state.changeContacts = action.payload;
    },
  },
});

export const { actions } = userSlice;

export default userSlice.reducer;
