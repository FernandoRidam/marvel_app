# Marvel App
Aplicação em ReactJs para buscar, listar e detalhar personagens da **Marvel**.


### Principais funcionalidades são:

1. Listar agentes.
2. Buscar agentes.
3. Detalhar agente.

### Telas

<img src="/prints/login.png">
-
<img src="/prints/recovery_password.png">
-
<img src="/prints/recovery_password_success.png">
-
<img src="/prints/select_agent.png">
-
<img src="/prints/selected_agent.png">
-
<img src="/prints/profile.png">
-
<img src="/prints/list_agents.png">
-

## Executando o projeto

### Na raiz do projeto
Rodar comando `yarn install` ou `npm install`.\
Criar arquivo `.env` seguindo o `.env.example`.\
Rodar comando `yarn start` ou `npm start`.

## APi

- A Api [Marvel Develop Portal](https://developer.marvel.com/) foi utilizada para obter as informações dos agentes.

## Tecnologias e Bibliotecas

### React

- O [React](https://react.dev/) foi utilizado em sua versão 18.2.0
- O [TypeScript](https://www.typescriptlang.org/) na versão 4.4.2.

### Principais libs:

- [Axios](https://github.com/axios/axios) para o consumo da api.
- [React Router Dom](https://github.com/remix-run/react-router/tree/main/packages/react-router-dom) para gerenciamento da navegação entre telas.
- [Phosphor](https://phosphoricons.com/) biblioteca de ícones.
- [Framer Motion](https://www.framer.com/motion/) para animações dos componentes.
- [Styled Components](https://styled-components.com/) para estilização dos componentes.
- [React Hook Form](https://react-hook-form.com/) para controle de formulários e validação dos campos com [Yup](https://github.com/jquense/yup).
- [React Redux](https://react-redux.js.org/) para gerenciamento de estado.

### Padrões

#### Componentização de código reutilizável

Componentes para exibição de cards informativos, listagens e botões foram criados para evitar a repetição de código. Os componentes são reutilizáveis e não contem regras de negocio, podendo ser utilizados nas variadas telas.

#### Separação de responsabilidades

- Uma camada de serviço foi criada e atua de forma transparente para as camadas superiores, seu funcionamento nao depende das regras superiores e vice e versa.
- As telas se preocupam em obter inputs dos usuários e mostrar resultados. Dessa forma, adicionar uma nova tela não é um trabalho tão árduo.
