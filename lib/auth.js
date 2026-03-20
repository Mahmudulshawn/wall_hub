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

// export const getUser = async () => {
//   try {
//     const user = await account.get();

//     // Try to fetch OAuth session
//     const sessions = await account.listSessions();
//     const current = sessions.sessions.find((s) => s.current);

//     if (current?.provider === "google") {
//       user.avatar = current.providerAccessToken
//         ? `https://www.googleapis.com/oauth2/v3/userinfo`
//         : null;
//     }

//     return user;
//   } catch {
//     return null;
//   }
// };

export const getUser = async () => {
  try {
    return await account.get();
  } catch (error) {
    return null;
  }
};
