import logo from '../../assets/logo_white.png';

interface LogoProps {
  width: number;
  height: number;
};

export const Logo: React.FC<LogoProps> = ({
  width,
  height,
}) => {
  return (
    <img
      src={ logo }
      alt="Pontua"
      style={{
        width,
        height,
      }}
    />
  );
};
