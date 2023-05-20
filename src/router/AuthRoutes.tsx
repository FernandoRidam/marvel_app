import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import {
  Login,
  RecoverPassword,
  SelectAgent,
} from '../screens';

export const AuthRoutes = () => {
  return (
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
  );
};
