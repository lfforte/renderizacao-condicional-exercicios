import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton
} from "./styled";

function TelaLogin({ mudarTela, senha, cadastraSenha, loginUser, fazerLogin, dadosCadastrado }) {

  const login = () => {
    // fluxo de login (ainda veremos)
    mudarTela("TelaPrincipal");
    console.log(dadosCadastrado);
  };

  const mostrarTelaCadastro = () => {
    mudarTela("TelaCadastro");
  };

  return (
    <FormContainer>
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel htmlFor="email"> E-mail: </StyledLabel>
        <Input htmlFor="email" onChange={fazerLogin} value={loginUser} />

        <StyledLabel htmlFor="password">Senha: </StyledLabel>
        <Input id="password" type={"password"} onChange={cadastraSenha} value={senha} />

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>
          Cadastre-se
        </RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
