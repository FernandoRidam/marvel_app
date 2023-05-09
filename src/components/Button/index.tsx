import {
  Icon,
} from '@phosphor-icons/react';

import {
  Action,
  IconView,
  ActionProps,
} from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ActionProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  Icon?: Icon;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  Icon,
  size = 'large',
  fullWidth = false,
  ...rest
}) => {
  return (
    <Action
      fullWidth={ fullWidth }
      size={ size }
     { ...rest }
    >
      { children }

      {
        Icon
          ? <IconView>
              <Icon size={ 16 }/>
            </IconView>
          : <></>
      }
    </Action>
  );
};
