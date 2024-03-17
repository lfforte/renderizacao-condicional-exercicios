import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton
} from "./styled";

function TelaCadastro({ mudarTela, nome, cadastraNome, email, cadastraEmail, senha, cadastraSenha, gravaDados, dadosCadastrado }) {
  const cadastrar = () => {
    // fluxo de cadastro (ainda veremos)
    mudarTela("TelaCadastroEndereco");
    console.log(dadosCadastrado);
  };

  const mostrarTelaLogin = () => {
    mudarTela("TelaLogin");
  };

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form onSubmit={gravaDados}>
        <StyledLabel htmlFor="name"> Nome: </StyledLabel>
        <Input id="name" onChange={cadastraNome} value={nome} />

        <StyledLabel htmlFor="email"> E-mail </StyledLabel>
        <Input id="email" onChange={cadastraEmail} value={email} />

        <StyledLabel htmlFor="password"> Senha: </StyledLabel>
        <Input id="password" onChange={cadastraSenha} value={senha} />

        <StyledLabel htmlFor="password-confirm">
          {" "}
          Confirmação da senha:{" "}
        </StyledLabel>
        <Input id="password-confirm" />

        <SendButton onClick={cadastrar}>Cadastrar Endereço</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>
          Já possuo cadastro
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
