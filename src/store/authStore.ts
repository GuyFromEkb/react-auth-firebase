import { getAuth, signOut } from "firebase/auth";
import { makeAutoObservable } from "mobx";
import getDataFromLS from "../utils/getDataFromLocalStorage";
import { LS_KEY, LS_PROFILE_EMAIL, LS_PROFILE_ID, LS_PROFILE_TOKEN } from "../utils/getUserTheme";

interface IUserProfile {
  [LS_PROFILE_EMAIL]: string;
  [LS_PROFILE_ID]: string;
  [LS_PROFILE_TOKEN]: string;
}

class AuthStore {
  private userProfile: IUserProfile | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  init = () => {
    this.getUserFromLS();
  };

  get isAuth() {
    return this.userProfile;
  }

  set setAuthProfile(profileData: IUserProfile | null) {
    this.userProfile = profileData;
  }

  logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      this.setAuthProfile = null;
      localStorage.removeItem(LS_KEY);
    } catch (error) {
      //
    }
  };

  private getUserFromLS = () => {
    const userProfileFromLS = getDataFromLS(LS_KEY);

    if (userProfileFromLS) this.setAuthProfile = userProfileFromLS;

    console.log("userProfileFromLS", userProfileFromLS);
  };
}

const authStore = new AuthStore();

export { authStore };
