import React, {
  useCallback,
  useState,
} from 'react';

import {
  Controller,
  Control,
} from 'react-hook-form';

import {
  Eye,
  EyeSlash,
  Icon,
} from '@phosphor-icons/react';

import {
  ErrorText,
  FormFieldView,
  IconView,
  Input,
  InputView,
} from './styles';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<any>;
  name: string;
  secureTextEntry?: boolean;
  Icon?: Icon;
};

export const TextField: React.FC<TextFieldProps> = ({
  control,
  name,
  secureTextEntry = false,
  Icon,
  ...rest
}) => {
  const [ focused, setFocused ] = useState<boolean>( false );
  const [ show, setShow ] = useState<boolean>( false );

  const getInputType = useCallback((): React.HTMLInputTypeAttribute => {
    if( secureTextEntry && !show ) {
      return 'password';
    } else if( secureTextEntry && show ) {
      return 'text';
    } else {
      return 'email';
    }
  }, [ secureTextEntry, show ]);

  return (
    <Controller
      control={ control }
      name={ name }
      render={({ field, fieldState: { error }}) =>
        <FormFieldView>
          <InputView
            focused={ focused }
            error={ !!error }
          >
            <Input
              { ...rest }
              { ...field }
              type={ getInputType()}
              onFocus={() => setFocused( true )}
              onBlur={() => setFocused( false )}
            />

            {
              Icon
                ? <IconView
                    focused={ focused }
                    error={ !!error }
                  >
                    <Icon size={ 24 }/>
                  </IconView>
                : <></>
            }

            {
              secureTextEntry
                ? <IconView
                    focused={ focused }
                    error={ !!error }
                    onClick={() => setShow( !show )}
                  >
                    {
                      show
                        ? <EyeSlash size={ 24 }/>
                        : <Eye size={ 24 }/>
                    }
                  </IconView>
                : <></>
            }
          </InputView>

          {
            error
              ? <ErrorText>{ error.message }</ErrorText>
              : <></>
          }
        </FormFieldView>
      }
    />
  );
};
