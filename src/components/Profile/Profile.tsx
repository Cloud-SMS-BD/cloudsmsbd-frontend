"use client";
import GetProfile from "@/actions/profile/GetProfile";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  selectGetProfile,
  selectIsLogin,
  selectProfilRefresh,
  selectSendSmsRefresh,
  setAvailableSms,
  setGetProfile,
  setIsLogin,
} from "@/redux/allStateSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import Aavtar from "./Aavtar";
import UserButtonPopover from "./UserButtonPopover";

const Profile = () => {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(selectIsLogin);
  const refresh = useAppSelector(selectProfilRefresh);
  const refreshAfterSendSms = useAppSelector(selectSendSmsRefresh);
  useEffect(() => {
    GetProfile()
      .then((e) => {
        if (e) {
          dispatch(setGetProfile(e));
          dispatch(setAvailableSms(e?.sms_quota));
          dispatch(setIsLogin(true));
        } else {
          dispatch(setGetProfile(null));
          dispatch(setAvailableSms(0));
          dispatch(setIsLogin(false));
        }
      })
      .catch(() => {
        dispatch(setGetProfile(null));
        dispatch(setAvailableSms(0));
        dispatch(setIsLogin(false));
      });
  }, [dispatch, refresh, isLogin, refreshAfterSendSms]);

  const user = useAppSelector(selectGetProfile);
  return (
    <Popover>
      <PopoverTrigger>
        <Aavtar className="w-8 h-8" />
      </PopoverTrigger>
      <PopoverContent>
        {user && <UserButtonPopover user={user} />}
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
