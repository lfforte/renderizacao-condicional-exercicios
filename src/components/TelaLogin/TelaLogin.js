import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton
} from "./styled";

function TelaLogin(props) {
  const login = () => {
    // fluxo de login (ainda veremos)
    props.mudarTela("TelaPrincipal");
  };

  const mostrarTelaCadastro = () => {
    props.mudarTela("TelaCadastro");
  };

  return (
    <FormContainer>
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel htmlFor="email"> E-mail: </StyledLabel>
        <Input htmlFor="email" />

        <StyledLabel htmlFor="password">Senha: </StyledLabel>
        <Input id="password" type={"password"} />

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>
          Cadastre-se
        </RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
