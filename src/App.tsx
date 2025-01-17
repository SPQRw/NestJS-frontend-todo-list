import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useAppDispatch } from "./store/hooks";
import { getTokenFromLocalStorage } from "./helpers/localStorage.helper";
import { AuthService } from "./services/auth.service";
import { isActive, logout } from "./store/user/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();

  const checkAuth = async () => {
    const token = getTokenFromLocalStorage();

    try {
      if (token) {
        const data = await AuthService.getMe();

        if (data) {
          dispatch(isActive(data));
        } else {
          dispatch(logout());
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
