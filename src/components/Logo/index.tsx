import logoWhite from '../../assets/logo_white.png';
import logo from '../../assets/logo.png';

interface LogoProps {
  width: number;
  height: number;
  variant: 'light' | 'dark';
};

export const Logo: React.FC<LogoProps> = ({
  width,
  height,
  variant,
}) => {
  return (
    <img
      src={ variant === 'light' ? logoWhite : logo }
      alt="Pontua"
      style={{
        width,
        height,
      }}
    />
  );
};
