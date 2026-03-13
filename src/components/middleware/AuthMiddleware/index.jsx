import { useNotification } from "@/contexts/notification";
import { useAuthStore } from "@/store/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * @param {Object} props
 * @param {import("react").ReactNode} props.children
 */
export default function AuthMiddleware({ children }) {
  const { token } = useAuthStore.getState();
  const notify = useNotification();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      notify.info("Login to continue!");
    }
  }, [token, navigate, notify]);

  return children;
}
