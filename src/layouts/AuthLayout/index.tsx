import {
  Logo,
} from "../../components";

import {
  BgImg,
  Content,
  Header,
  Layout,
  Row,
} from "./styles";

import bg_img from '../../assets/bg_image.png';

interface AuthLayoutProps {
  children: React.ReactNode;
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}) => {
  return (
    <Layout>
      <Header>
        <Logo
          width={ 169 }
          height={ 50 }
          variant="light"
        />
      </Header>

      <Row>
        <BgImg
          id="bg-img"
          src={ bg_img }
          alt="BG-IMG"
        />

        <Content id="auth-content">{ children }</Content>
      </Row>
    </Layout>
  );
};
