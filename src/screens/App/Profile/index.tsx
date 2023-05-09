import {
  useSelector,
} from 'react-redux';

import {
  RootState,
} from '../../../store';

import {
  Divider,
  Title,
} from '../../../components';

import {
  Container,
  Content,
} from './styles';

import {
  ContentTab,
} from './ContentTab';

export const Profile = () => {
  const {
    agent,
  } = useSelector(( state: RootState ) => state );

  return (
    <Content>
      <Divider />

      <Container>
        <Title
          size="small"
          style={{
            marginBottom: 24,
            paddingLeft: 36,
          }}
        >
          <span>Profile</span>
          <span> / </span>
          <span>{ agent.name }</span>
        </Title>

        <ContentTab
          agent={ agent }
        />
      </Container>
    </Content>
  );
};
