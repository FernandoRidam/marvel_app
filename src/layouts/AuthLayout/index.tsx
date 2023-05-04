interface AuthLayoutProps {
  children: React.ReactNode;
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}) => {
  return (
    <div>{ children }</div>
  );
};
