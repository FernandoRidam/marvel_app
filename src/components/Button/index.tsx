import {
  Icon,
} from '@phosphor-icons/react';

import {
  Action, IconView,
} from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  Icon?: Icon;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  Icon,
  ...rest
}) => {
  return (
    <Action
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
