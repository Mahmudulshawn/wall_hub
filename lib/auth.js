import { account } from "./appwrite";

export const loginWithGoogle = () => {
  account.createOAuth2Session({
    provider: "google",
    success: window.location.origin,
    failure: `${window.location.origin}/login`,
  });
};

export const logout = async () => {
  await account.deleteSession("current");
};

export const getUser = async () => {
  try {
    return await account.get();
  } catch (error) {
    return null;
  }
};
