import { createSlice } from "@reduxjs/toolkit";

const initialLoggedInState = { isLoggedIn: false };

createSlice({
    name: 'login',
    initialState: initialLoggedInState,
    reducers: {
        loggedIn() {},
        loggedOut() {}
    }
})