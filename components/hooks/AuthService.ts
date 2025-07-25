import axios from "axios";
import { useRouter } from "next/navigation";

const api = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

export function useAuth() {
  const router = useRouter();

  const login = async (
    email: string,
    password: string,
    role: "COMPANY" | "CLIENT" | "VENDOR"
  ) => {
    const res = await api.post("/auth/login", { email, password, role });

    if (typeof window !== "undefined") {
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("token", res.data.token);
    }

    return res.data;
  };

  const signup = async (
    data: Record<string, unknown>,
    role: "COMPANY" | "CLIENT" | "VENDOR"
  ) => {
    const res = await api.post(`/auth/signup`, { ...data, role });
    return res.data;
  };

  const logout = async () => {
    await api.post("/auth/logout");

    if (typeof window !== "undefined") {
      localStorage.removeItem("role");
      localStorage.removeItem("token");
    }

    router.push("/login");
  };

  return { login, signup, logout };
}
