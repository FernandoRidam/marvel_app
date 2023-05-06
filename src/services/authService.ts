interface LoginReturn {
  success: boolean;
  message?: string;
};

export const login = ( email: string, password: string ): LoginReturn => {
  if( email === 'shield@marvel.com' && password === '12345678') {
    return {
      success: true,
      message: 'Sucesso!',
    };
  } else {
    return {
      success: false,
      message: 'Email ou senha está inválido!'
    };
  }
};
