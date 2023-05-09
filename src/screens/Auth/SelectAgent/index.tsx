import {
  useState,
} from 'react';

import {
  useNavigate,
} from 'react-router-dom';

import {
  useDispatch,
} from 'react-redux';

import {
  useForm,
} from 'react-hook-form';

import {
  yupResolver,
} from '@hookform/resolvers/yup';

import {
  enqueueSnackbar,
} from 'notistack';

import {
  getAgents,
} from '../../../services';

import {
  Button,
  SubTitle,
  Title,
  Select,
} from '../../../components';

import {
  Content,
  Form,
} from '../styles';

import {
  SelectAgentData,
  SelectAgentSchema,
} from '../../../schema';

import {
  save,
} from '../../../store/agentSlice';

import {
  Agent,
} from '../../../@types/agent';

export const SelectAgent = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const limit = 10;
  const [ total, setTotal ] = useState<number>( 0 );

  const [ gettingAgents, setGettingAgents ] = useState<boolean>( false );

  const [ agents, setAgents ] = useState<Array<Agent>>([]);

  const {
    control,
    handleSubmit,
    formState: {
      isValid,
    }
  } = useForm<SelectAgentData>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver( SelectAgentSchema ),
  });

  const loadAgents = async ( page: number, search: string = '') => {
    setGettingAgents( true );

    const {
      success,
      message,
      result,
    } = await getAgents( search, page, 10 );

    if( success ) {
      setTotal( result.total );

      if( page > 1 ) {
        setAgents(( value ) => [ ...value, ...result.data ]);
      } else {
        setAgents( result.data );
      }
    } else {
      enqueueSnackbar( message, {
        variant: 'error',
      });
    }

    setGettingAgents( false );
  };

  const onSubmit = ( data: SelectAgentData ) => {
    dispatch( save( data.agent ));

    navigate(`/profile/${ data.agent }`);
  };

  return (
    <Content
      style={{
        maxWidth: 405,
        minHeight: 'auto',
      }}
    >
      <Title>
        <span>Selecione o seu agente mais legal</span>
        <span>.</span>
      </Title>

      <SubTitle>Tenha a visão completa do seu agente.</SubTitle>

      <Form onSubmit={ handleSubmit( onSubmit )}>
        <Select
          control={ control }
          name="agent"
          placeholder="Selecione um agente"
          loadingData={ gettingAgents }
          handleLoadOptions={( search, page ) => loadAgents( page, search )}
          options={{
            total,
            limit,
            data: agents.map(( item ) => {
              return {
                value: item.id,
                label: item.name,
                avatar: `${ item.thumbnail.path }/standard_medium.${ item.thumbnail.extension }`,
              };
            }),
          }}
        />

        <Button
          disabled={ !isValid }
          type="submit"
          size="small"
        >
          Entrar
        </Button>
      </Form>
    </Content>
  );
};
