import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Control,
  Controller,
} from 'react-hook-form';

import {
  AnimatePresence,
} from 'framer-motion';

import {
  CaretDown,
  Check,
  SpinnerGap,
  User,
} from '@phosphor-icons/react';

import {
  ErrorText,
  Field,
  FieldView,
  IconView,
  Label,
  Loading,
  Option,
  Options,
  OptionsView,
  Placeholder,
  Search,
  SearchView,
} from './styles';
import theme from '../../config/theme';
import { Avatar } from '../Avatar';

export interface IOption {
  value: number | string;
  label: string;
  avatar?: string;
};

interface IOptions {
  total: number;
  limit: number;
  data: Array<IOption>;
};

interface SelectProps {
  control: Control<any>;
  name: string;
  placeholder: string;
  options: IOptions;
  loadingData?: boolean;
  handleLoadOptions?: ( search: string, page: number ) => void;
};

export const Select: React.FC<SelectProps> = ({
  control,
  name,
  placeholder,
  options,
  loadingData = false,
  handleLoadOptions = () => {},
}) => {
  const [ timeOut, setTimeOut ] = useState<NodeJS.Timeout>();

  const [ showOptions, setShowOptions ] = useState<boolean>( false );

  const [ page, setPage ] = useState<number>( 1 );
  const [ search, setSearch ] = useState<string | null>( null );

  const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [callback]);

    return ref;
  };

  const selectViewRef = useOutsideClick(() => setShowOptions( false ));

  useEffect(() => {
    if( showOptions ) {
      const scrollView = document.getElementById('options-view');

      if( scrollView ) {
        scrollView.addEventListener('scroll', () => {
          if (scrollView.scrollTop + scrollView.clientHeight >= scrollView.scrollHeight) {
            setPage(( value ) => value + 1 );
          }
        });
      }

      return () => scrollView?.removeEventListener('scroll', () => {});
    }
  }, [ showOptions ]);

  useEffect(() => {
    handleLoadOptions( search ?? '', page );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ page ]);

  useEffect(() => {
    if ( timeOut )
      clearTimeout( timeOut );

    if( search !== null ) {
      setTimeOut( setTimeout(() => handleLoadOptions( search, 1 ), 2000 ));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ search ]);

  return (
    <Controller
      control={ control }
      name={ name }
      render={({ field: { value, onChange }, fieldState: { error }}) => {
        const selected = options.data.find(( option ) => option.value === value );

        return (
          <FieldView ref={ selectViewRef }>
            <Field
              open={ showOptions }
              error={ !!error }
              onClick={() => setShowOptions( !showOptions )}
            >
             {
                selected && selected.avatar
                  ? <Avatar
                      url={ selected.avatar }
                      size={ 24 }
                    />
                  : <User
                      weight="bold"
                      style={{
                        marginRight: 16,
                      }}
                    />
             }

             {
                selected
                  ? <Label>{ selected.label }</Label>
                  : <Placeholder>{ placeholder }</Placeholder>
             }

              <IconView
                open={ showOptions }
                error={ !!error }
              >
                <CaretDown weight="bold"/>
              </IconView>
            </Field>

            {
              error
                ? <ErrorText>{ error.message }</ErrorText>
                : <></>
            }

            <AnimatePresence>
              {
                showOptions
                  ? <OptionsView key="options-view">
                      <SearchView>
                        <Search
                          placeholder="Buscar agente"
                          value={ search ?? ''}
                          onChange={( event ) => setSearch( event.target.value )}
                        />
                      </SearchView>

                      <Options id="options-view">
                        {
                          (( !loadingData ) || ( page !== 1 )) &&
                            options.data.map(( option ) =>
                              <Option
                                key={ option.value }
                                selected={ option.value === value }
                                onClick={() => {
                                  onChange( option.value );

                                  setShowOptions( false );
                                }}
                              >
                                { option.avatar && <Avatar
                                    url={ option.avatar }
                                    size={ 24 }
                                  />
                                }

                                <Label>{ option.label }</Label>

                                { option.value === value && <Check color={ theme.COLORS.BLUE_800 }/>}
                              </Option>
                            )
                        }
                      </Options>

                      {
                        loadingData &&
                          <Loading>
                            <SpinnerGap
                              size={ 24 }
                            />
                          </Loading>
                      }
                    </OptionsView>
                  : <></>
              }
            </AnimatePresence>
          </FieldView>
        );
      }}
    />
  );
};
