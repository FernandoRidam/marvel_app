import React from 'react';
import { AppLayout, AuthLayout } from '../layouts';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';

interface LayoutProviderProps {
  authenticated: boolean;
};

export const LayoutProvider: React.FC<LayoutProviderProps> = ({
  authenticated,
}) => {
  return authenticated
    ? <AppLayout>
        <AppRoutes />
      </AppLayout>
    : <AuthLayout>
        <AuthRoutes />
      </AuthLayout>;
};
