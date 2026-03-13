import { useNotification } from "@/contexts/notification";
import { api } from "@/lib/api";
import { useRequest } from "@/lib/request";
import { useAuthStore } from "@/store/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const qc = useQueryClient();
  const { request } = useRequest();
  const { setAuth } = useAuthStore.getState();
  const notify = useNotification();
  const navigate = useNavigate();

  const { isPending: loading, mutateAsync: login } = useMutation({
    mutationFn: request(async function (/**@type {Record<String, string>}*/ data) {
      const response = await api.post("/auth/login", data);
      const responseData = response.data;
      if (responseData?.success && responseData?.result?.token) {
        const result = responseData?.result;
        console.log("Results");
        console.log(responseData);
        setAuth({ user: result?.user, token: result?.token, permission: result?.permissions });
        notify.success("Login successful! 🥳");
        navigate("/");
        return;
      }
      notify.info("Error occured! Try again. ☺️");
    }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  return { loading, login };
}

export function useLogOut() {
  const qc = useQueryClient();
  const { request } = useRequest();
  const { clearAuth } = useAuthStore.getState();
  const notify = useNotification();
  const navigate = useNavigate();

  const { isPending: loading, mutateAsync: logOut } = useMutation({
    mutationFn: request(async function () {
      const response = await api.post("/auth/logout", {});
      const responseData = response.data;
      if (responseData?.success) {
        clearAuth();
        notify.success("See you again! 😔");
        navigate("/login");
        return "SUCCESS";
      }
      notify.info("Error occured! Try again. ☺️");
    }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  return { loading, logOut };
}

export function useResetPassword() {
  const { request } = useRequest();
  const notify = useNotification();

  const { isPending: loading, mutateAsync: resetPassword } = useMutation({
    mutationFn: request(async function (/**@type {Record<String, string>}*/ data) {
      const response = await api.post("/auth/reset-password", data);
      const responseData = response.data;
      if (responseData?.success) {
        notify.success("Code sent to your email! 🥳");
        return "SUCCESS";
      }
      notify.info("Error occured! Try again. ☺️");
    }),
  });

  return { loading, resetPassword };
}

export function useVerifyPasswordReset() {
  const { request } = useRequest();
  const notify = useNotification();

  const { isPending: loading, mutateAsync: verifyPasswordReset } = useMutation({
    mutationFn: request(
      async function (/**@type {Record<String, string>}*/ data) {
        const response = await api.post("/auth/verify-forgot-password", data);
        const responseData = response.data;
        if (responseData?.success) {
          notify.success("Password reset! Login. 🥳");
          return "SUCCESS";
        }
        notify.info("Error occured! Try again. ☺️");
      },
      {
        onError: (error) => {
          const responseData = error?.response?.data;

          if (responseData?.error == 3) {
            notify.error("Code has expired! Enter your email. 🫩");
            return;
          }
          const message = responseData?.message;
          notify.error(message || "Verification failed! 🫩");
        },
      },
    ),
  });

  return { loading, verifyPasswordReset };
}

/**
 *
 * @param {number} id
 */
export function useGetRoleSubRoles(id) {
  const { request } = useRequest();
  const { isPending: loading, data } = useQuery({
    queryKey: ["role_sub_roles", id],
    queryFn: request(async function () {
      const response = await api.get(`/permissions/get_all_roles/permission?role_id=${id}`);
      const responseData = response.data;

      console.log("Roles response");
      console.log(responseData);

      if (responseData?.success && responseData?.result) {
        return responseData.result;
      }

      return [];
    }),
    enabled: !!id,
  });

  return {
    loading,
    data,
  };
}

export function useRegister() {
  const { request } = useRequest();
  const notify = useNotification();

  const { isPending: loading, mutateAsync: register } = useMutation({
    mutationFn: request(async function (/**@type {Record<String, string>}*/ data) {
      const response = await api.post("/auth/register", data);
      const responseData = response.data;
      if (responseData?.success) {
        notify.success("Welcome Onboard! Verify your account. 🥳");
        return "SUCCESS";
      }
      notify.info("Error occured! Try again. ☺️");
    }),
  });

  return { loading, register };
}

export function useVerifyEmail() {
  const { request } = useRequest();
  const notify = useNotification();

  const { isPending: loading, mutateAsync: verifyEmail } = useMutation({
    mutationFn: request(async function (/**@type {Record<String, string>}*/ data) {
      const response = await api.post("/auth/verify-email", data);
      const responseData = response.data;
      if (responseData?.success) {
        notify.success("Welcome, Elite One! 🥳");
        return "SUCCESS";
      }
      notify.info("Error occured! Try again. ☺️");
    }),
  });

  return { loading, verifyEmail };
}
