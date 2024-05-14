import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import styled from "styled-components";
import useSignInOutWithGoogle from "@/hooks/auth/useSingInOutWithGoogle.ts";
import useUserStore from "@/stores/useUserStore.ts";

const LoginPageWrapper = styled.div`
  border: 1px solid white;
  padding: 2rem;
  border-radius: 10px;

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  button {
    width: 15rem;
    display: flex;
    justify-content: space-between;
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { signIn } = useSignInOutWithGoogle();

  useEffect(() => {
    if (user) {
      toast.error("already logged in!");
      navigate("/");
    }
  }, []);

  return (
    <LoginPageWrapper>
      <h1>Log in</h1>
      <button onClick={signIn}>
        <FaGoogle />
        Continue with Google
      </button>
      <Toaster />
    </LoginPageWrapper>
  );
};

export default LoginPage;
