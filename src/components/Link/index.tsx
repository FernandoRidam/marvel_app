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
  align?: 'left' | 'right';
};

export const Link: React.FC<LinkProps> = ({
  children,
  Icon,
  align = 'left',
  ...rest
}) => {
  return (
    <SlimButton
      align={ align }
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
