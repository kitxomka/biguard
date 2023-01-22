import { createSlice } from "@reduxjs/toolkit";

import { accountsData, securityData } from "../images/data";

const initialState = {
    userAccounts: accountsData,
    userData: {},
    securityChecklist: securityData
}


export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        getUserData: (state, action) => {
            state.userData = action.payload;
            // console.log('state.userData', state.userData);
        },
        getSecurityData: (state, action) => {
            state.securityChecklist = action.payload;
        },
    }
});


export const { getUserData, getSecurityData } = appSlice.actions;
export default appSlice.reducer;