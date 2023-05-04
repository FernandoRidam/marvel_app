import {
  Route,
  Routes,
  Navigate,
} from "react-router";

import {
  BrowserRouter,
} from "react-router-dom";

import {
  AppLayout,
  AuthLayout,
} from "../layouts";
import { Login } from "../screens";
import { RecoverPassword } from "../screens/RecoverPassword";

export const Router = () => {
  const authenticated = false;
  return (
    <BrowserRouter>
      {
        !authenticated
          ? (
              <AuthLayout>
                <Routes>
                  <Route
                    path="/*"
                    element={<Navigate to="/login"/>}
                  />

                  <Route
                    path="/login"
                    element={<Login />}
                  />

                  <Route
                    path="/recover-password"
                    element={<RecoverPassword />}
                  />
                </Routes>
              </AuthLayout>
            )
          : (
              <AppLayout>
                <Routes>
                  <Route
                    path="/*"
                    element={<Navigate to="/login"/>}
                  />
                </Routes>
              </AppLayout>
            )
      }
    </BrowserRouter>
  );
};
