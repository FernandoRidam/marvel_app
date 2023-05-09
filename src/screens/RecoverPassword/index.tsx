import {
  useState,
} from 'react';

import {
  useNavigate,
} from 'react-router-dom';

import {
  useForm,
} from 'react-hook-form';

import {
  yupResolver,
} from '@hookform/resolvers/yup';

import {
  At,
  CaretLeft,
} from '@phosphor-icons/react';

import {
  enqueueSnackbar,
} from 'notistack';

import {
  login,
} from '../../services';

import {
  RecoveryPasswordFormData,
  RecoveryPasswordSchema,
} from '../../schema';

import {
  TextField,
  SubTitle,
  Title,
  Button,
  Link,
} from '../../components';

import {
  Content,
  Form,
} from './styles';

export const RecoverPassword = () => {
  const navigate = useNavigate();

  const [ success, setSuccess ] = useState<boolean>( false );

  const {
    control,
    handleSubmit,
    formState: {
      isValid,
    }
  } = useForm<RecoveryPasswordFormData>({
    defaultValues: {
      email: 'shield@marvel.com',
    },
    resolver: yupResolver( RecoveryPasswordSchema ),
  });

  const onSubmit = ( data: RecoveryPasswordFormData ) => {
    console.log( data );

    setSuccess( true );
  };

  const handleBack = () => navigate('..');

  return (
    <Content>
      <Title>
        {
          !success
            ? <>
                <span>Recuperar senha</span>

                <span>.</span>
              </>
            : <>
                <span>Tudo certo</span>

                <span> ;)</span>
              </>
        }
      </Title>

      {
        !success
          ? <>
              <SubTitle
                style={{
                  marginTop: 24,
                }}
              >
                Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.
              </SubTitle>

              <Form onSubmit={ handleSubmit( onSubmit )}>
                <TextField
                  control={ control }
                  name="email"
                  placeholder="Informe seu email"
                  Icon={ At }
                />

                <Button
                  disabled={ !isValid }
                  type="submit"
                >
                  enviar link
                </Button>
              </Form>

              <Link
                Icon={ CaretLeft }
                onClick={ handleBack }
              >
                Voltar
              </Link>
            </>
          : <>
              <SubTitle
                style={{
                  marginTop: 24,
                }}
              >
                Foi enviado um e-mail para você com instruções de como redefinir a sua senha.
              </SubTitle>

              <Button
                onClick={ handleBack }
                style={{
                  marginTop: 24,
                }}
              >
                voltar para o login
              </Button>
            </>
      }
    </Content>
  );
};
