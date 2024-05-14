import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/firebase.ts";
import useUserStore from "@/stores/useUserStore.ts";

export const useSignInOutWithGoogle = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const provider = new GoogleAuthProvider();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        });

        toast.success("Logged in successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login failed. Please try again.");
      });
  };

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        setUser(null);

        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Log out failed. Please try again.");
      });
  };

  return {
    signIn,
    signOutWithGoogle,
  };
};

export default useSignInOutWithGoogle;
