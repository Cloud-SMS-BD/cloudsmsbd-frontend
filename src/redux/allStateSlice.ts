import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface problemState {
  // check user login or not
  isLogin: boolean;
  // profile
  profilRefresh: boolean;
  getProfile: any;
  // Api Token
  apiTokenRefresh: boolean;
  api_Key: any;
  // send sms or otp
  sendSmsRefresh: boolean;
  allSmsList: any;
  // dashboard data
  available_sms: number;
  sent_sent: number;
}

const initialState: problemState = {
  // check user login or not
  isLogin: false,
  // profile
  profilRefresh: false,
  getProfile: [],
  // Api token
  apiTokenRefresh: false,
  api_Key: "",
  // send sms or otp
  sendSmsRefresh: false,
  allSmsList: [],
  // dashboard data
  available_sms: 0,
  sent_sent: 0,
};

export const allStateSlice = createSlice({
  name: "problem",
  initialState,
  reducers: {
    //  check user login or not
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    // profile
    setProfilRefresh: (state) => {
      state.profilRefresh = !state.profilRefresh;
    },
    setGetProfile: (state, action) => {
      state.getProfile = action.payload;
    },
    //  Api Token
    setApiTokenRefresh: (state) => {
      state.apiTokenRefresh = !state.apiTokenRefresh;
    },
    setApiToken: (state, action) => {
      state.api_Key = action.payload;
    },
    // send sms or otp
    setSendSmsRefresh: (state) => {
      state.sendSmsRefresh = !state.sendSmsRefresh;
    },
    setAllSmsList: (state, action) => {
      state.allSmsList = action.payload;
    },
    // dashboard data
    setAvailableSms: (state, action) => {
      state.available_sms = action.payload;
    },
    setSentSms: (state, action) => {
      state.sent_sent = action.payload;
    },
  },
});

export const {
  // check user login or not
  setIsLogin,
  // profile
  setProfilRefresh,
  setGetProfile,
  // Api Token
  setApiTokenRefresh,
  setApiToken,
  // send sms or otp
  setSendSmsRefresh,
  setAllSmsList,
  // dashboard data
  setAvailableSms,
  setSentSms,
} = allStateSlice.actions;

// check user login or not
export const selectIsLogin = (state: RootState) => state.problem.isLogin;
// profile
export const selectProfilRefresh = (state: RootState) =>
  state.problem.profilRefresh;
export const selectGetProfile = (state: RootState) => state.problem.getProfile;
// Api Token
export const selectApiTokenRefresh = (state: RootState) =>
  state.problem.apiTokenRefresh;
export const selectApiToken = (state: RootState) => state.problem.api_Key;
// send sms or otp
export const selectSendSmsRefresh = (state: RootState) =>
  state.problem.sendSmsRefresh;
export const selectAllSmsList = (state: RootState) => state.problem.allSmsList;
// dashboard data
export const selectAvailableSms = (state: RootState) =>
  state.problem.available_sms;
export const selectSentSms = (state: RootState) => state.problem.sent_sent;
export default allStateSlice.reducer;
