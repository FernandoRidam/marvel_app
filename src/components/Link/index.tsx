import {
  Icon,
} from '@phosphor-icons/react';

import {
  IconView,
  SlimButton,
} from './styles';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  Icon?: Icon;
};

export const Link: React.FC<LinkProps> = ({
  children,
  Icon,
  ...rest
}) => {
  return (
    <SlimButton
      { ...rest }
    >
      {
        Icon
          ? <IconView>
              <Icon size={ 16 }/>
            </IconView>
          : <></>
      }

      { children }
    </SlimButton>
  );
};
