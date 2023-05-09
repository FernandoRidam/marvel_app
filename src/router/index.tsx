import {
  Route,
  Routes,
  Navigate,
} from "react-router";

import {
  BrowserRouter,
} from "react-router-dom";

import {
  useSelector,
} from 'react-redux';

import {
  RootState,
} from '../store';

import {
  AppLayout,
  AuthLayout,
} from "../layouts";

import {
  Home,
  Login,
  Profile,
  RecoverPassword,
  SelectAgent,
} from "../screens";

export const Router = () => {
  const {
    agent,
  } = useSelector(( state: RootState ) => state );

  const authenticated = !!agent.id;

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

                  <Route
                    path="/select-agent"
                    element={<SelectAgent />}
                  />
                </Routes>
              </AuthLayout>
            )
          : (
              <AppLayout>
                <Routes>
                  <Route
                    path="/*"
                    element={<Navigate to="/home"/>}
                  />

                  <Route
                    path="/home"
                    element={<Home />}
                  />

                  <Route
                    path="/profile"
                    element={<Profile />}
                  />
                </Routes>
              </AppLayout>
            )
      }
    </BrowserRouter>
  );
};
