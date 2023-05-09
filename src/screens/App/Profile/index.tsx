import {
  useEffect,
  useState,
} from 'react';

import {
  useParams,
} from 'react-router-dom';

import {
  useSelector,
} from 'react-redux';

import {
  enqueueSnackbar,
} from 'notistack';

import {
  Divider,
  Title,
} from '../../../components';

import {
  Container,
  Content,
} from '../styles';

import {
  ContentTab,
} from './ContentTab';

import {
  getAgent,
} from '../../../services';

import {
  Agent,
} from '../../../@types/agent';

import {
  RootState,
} from '../../../store';

export const Profile = () => {
  const {
    agent: _agent,
  } = useSelector(( state: RootState ) => state );

  const [ agent, setAgent ] = useState<Agent | null>( null );

  const { id } = useParams();

  const loadAgent = async () => {
    const {
      success,
      message,
      result,
    } = await getAgent( id ? Number( id ) : _agent );

    if( success ) {
      setAgent( result );
    } else {
      enqueueSnackbar( message, {
        variant: 'error',
      })
    }
  };

  useEffect(() => {
    loadAgent();
  }, []);

  return (
    <Content
      style={{
        paddingTop: 71,
      }}
    >
      <Divider />

      <Container>
        <Title
          size="small"
          style={{
            marginBottom: 24,
            paddingLeft: 36,
          }}
        >
          <span>Perfil</span>
          <span> / </span>
          <span>{ agent?.name }</span>
        </Title>

        {
          agent &&
            <ContentTab
              agent={ agent }
            />
        }
      </Container>
    </Content>
  );
};
