import {
  useEffect,
  useState,
} from 'react';

import {
  useNavigate,
} from 'react-router-dom';

import {
  ArrowLeft,
  ArrowRight,
  MagnifyingGlass,
} from '@phosphor-icons/react';

import {
  enqueueSnackbar,
} from 'notistack';

import {
  Divider,
  Pagination,
  CardAgent,
} from '../../../components';

import {
  Content,
} from '../styles';

import {
  GridView,
  Header,
  PaginationView,
  Search,
} from './styles';

import {
  Agent,
} from '../../../@types/agent';

import {
  getAgents,
} from '../../../services';

export const Home = () => {
  const navigate = useNavigate();
  const limit = 10;
  const [ total, setTotal ] = useState<number>( 0 );
  const [ page, setPage ] = useState<number>( 1 );

  const [ timeOut, setTimeOut ] = useState<NodeJS.Timeout>();

  const [ gettingAgents, setGettingAgents ] = useState<boolean>( false );

  const [ agents, setAgents ] = useState<Array<Agent>>([]);

  const [ search, setSearch ] = useState<string | null>( null );

  const loadAgents = async ( page: number, search: string = '') => {
    setGettingAgents( true );

    const {
      success,
      message,
      result,
    } = await getAgents( search ?? '', page, 10 );

    if( success ) {
      setTotal( result.total );

      setAgents( result.data );
    } else {
      enqueueSnackbar( message, {
        variant: 'error',
      });
    }

    setGettingAgents( false );
  };


  useEffect(() => {
    if ( timeOut )
      clearTimeout( timeOut );

    if( search !== null ) {
      setTimeOut( setTimeout(() => {
        if( page > 1 ) {
          setPage( 1 );
        } else {
          loadAgents( 1, search );
        }
      }, 2000 ));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ search ]);

  useEffect(() => {
    loadAgents( page, search ?? '');
  }, [ page ]);

  return(
    <Content>
      <Header>
        <MagnifyingGlass size={ 24 } />

        <Search
          placeholder="Busque um agente"
          value={ search ?? ''}
          onChange={( event ) => setSearch( event.target.value )}
        />
      </Header>

      <Divider />

      <GridView id="agent-grid-view-id">
        {
          agents.map(( agent ) =>
            <CardAgent
              key={ agent.id }
              agent={ agent }
              onClick={() => navigate(`/profile/${ agent.id }`)}
            />
          )
        }
      </GridView>

      <PaginationView>
        <Pagination
          breakLabel="..."
          previousLabel={
            <>
              <ArrowLeft size={ 20 }/>

              Anterior
            </>
          }
          nextLabel={
            <>
              Próxima

              <ArrowRight size={ 20 }/>
            </>
          }
          forcePage={ page - 1 }
          onPageChange={( event ) => setPage( event.selected + 1 )}
          pageRangeDisplayed={ 1 }
          pageCount={ Math.ceil( total / limit )}
          renderOnZeroPageCount={ null }
        />
      </PaginationView>
    </Content>
  );
};
