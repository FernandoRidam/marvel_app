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
  Shield,
  SignOut,
} from '@phosphor-icons/react';

import {
  enqueueSnackbar,
} from 'notistack';

import {
  login,
} from '../../../services';

import {
  LoginData,
  LoginSchema,
} from '../../../schema';

import {
  TextField,
  SubTitle,
  Title,
  Button,
  Link,
} from '../../../components';

import {
  Content,
  Form,
} from '../styles';

export const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: {
      isValid,
    }
  } = useForm<LoginData>({
    defaultValues: {
      email: 'shield@marvel.com',
      password: '12345678',
    },
    resolver: yupResolver( LoginSchema ),
  });

  const onSubmit = ( data: LoginData ) => {
    const {
      success,
      message,
    } = login( data.email, data.password );

    if( success ) {
      enqueueSnackbar( message, {
        variant: 'success',
      });

      navigate('/select-agent');
    } else {
      enqueueSnackbar( message, {
        variant: 'error',
      });
    }
  };

  return (
    <Content>
      <Title>
        <span>Bem-vindo</span>
        <span>.</span>
      </Title>

      <SubTitle>informe as suas credenciais de acesso ao portal</SubTitle>

      <Form onSubmit={ handleSubmit( onSubmit )}>
        <TextField
          control={ control }
          name="email"
          placeholder="Informe seu email"
          Icon={ At }
        />

        <TextField
          control={ control }
          name="password"
          placeholder="Informe sua senha"
          secureTextEntry
        />

        <Button
          Icon={ SignOut }
          disabled={ !isValid }
          type="submit"
          fullWidth
        >
          entrar
        </Button>
      </Form>

      <Link
        Icon={ Shield }
        onClick={() => navigate('/recover-password')}
        align="right"
      >
        Esqueceu a senha?
      </Link>
    </Content>
  );
};
