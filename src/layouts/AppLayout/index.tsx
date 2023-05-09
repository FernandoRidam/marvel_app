import {
  ArrowBendUpLeft,
  SquaresFour, User,
} from '@phosphor-icons/react';

import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

import {
  useDispatch,
} from 'react-redux';

import {
  Divider,
  Logo,
} from '../../components';

import {
  ItemMenu,
  Layout,
  LeftMenu,
  TopMenu,
} from './styles';

import {
  reset,
} from '../../store/agentSlice';

interface AppLayoutProps {
  children: React.ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    pathname,
  } = useLocation();

  const items = [
    {
      path: '/home',
      name: 'Home',
      Icon: SquaresFour,
    },

    {
      path: '/profile',
      name: 'Perfil',
      Icon: User,
    },
  ];

  const handleLogout = () => {
    dispatch( reset( null ));

    navigate('/login');
  };

  return (
    <Layout>
      <LeftMenu>
        <TopMenu>
          <Logo
            width={ 105 }
            height={ 27 }
            variant="dark"
          />
        </TopMenu>

        <Divider />

        {
          items.map(({ Icon, name, path }) =>
            <ItemMenu
              key={ name }
              selected={ path === pathname }
              onClick={() => navigate( path )}
            >
              <Icon
                size={ 24 }
                style={{
                  marginRight: 16,
                }}
              />

              { name }
            </ItemMenu>
          )
        }

        <Divider />

        <ItemMenu
          onClick={ handleLogout }
        >
          <ArrowBendUpLeft
            size={ 24 }
            style={{
              marginRight: 16,
            }}
          />

          Sair
        </ItemMenu>
      </LeftMenu>

      { children }
    </Layout>
  );
};
