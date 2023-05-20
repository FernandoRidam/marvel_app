import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import {
  Home,
  Profile,
} from '../screens';

export const AppRoutes = () => {
  return (
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

      <Route
        path="/profile/:id"
        element={<Profile />}
      />
    </Routes>
  );
};
