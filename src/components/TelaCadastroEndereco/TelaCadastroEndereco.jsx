import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton
} from "../TelaCadastro/styled";

function TelaCadastro({ mudarTela, rua, numero, complento, telefone, cadastraRua, cadastraNumero, cadastraComplemento, cadastraTelefone, dadosCadastrado }) {
  const cadastrar = () => {
    // fluxo de cadastro (ainda veremos)
    mudarTela("TelaPrincipal");
    console.log(dadosCadastrado);
  };

  const mostrarTelaLogin = () => {
    mudarTela("TelaLogin");
  };

  return (
    <FormContainer>
      <h1>Cadastro de Endereço </h1>

      <Form>
        <StyledLabel htmlFor="rua"> Rua: </StyledLabel>
        <Input id="rua" onChange={cadastraRua} value={rua} />

        <StyledLabel htmlFor="numero"> Número </StyledLabel>
        <Input id="numero" onChange={cadastraNumero} value={numero} />

        <StyledLabel htmlFor="complemento"> Complemento: </StyledLabel>
        <Input id="complemento" onChange={cadastraComplemento} value={complento} />

        <StyledLabel htmlFor="telefone"> Telefone: </StyledLabel>
        <Input id="telefone" onChange={cadastraTelefone} value={telefone} />

        <SendButton onClick={cadastrar}>Confirmar</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>
          Já possuo cadastro
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;