import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import TelaCadastroEndereco from "./components/TelaCadastroEndereco/TelaCadastroEndereco.jsx"

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [telaAtual, setTelaAtual] = useState("TelaLogin")

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [rua, setRua] = useState("")
  const [numero, setNumero] = useState("")
  const [complento, setComplemento] = useState("")
  const [telefone, setTelefone] = useState("")
  const [loginUser, setLogin] = useState("")

  const mudarTela = (novaTela) => {
    setTelaAtual(novaTela)
  }

  const cadastraNome = (e) => {
    setNome(e.target.value)
  }
  const cadastraEmail = (e) => {
    setEmail(e.target.value)
  }
  const cadastraSenha = (e) => {
    setSenha(e.target.value)
  }
  const fazerLogin = (e) => {
    setLogin(e.target.value)
  }
  const cadastraRua = (e) => {
    setRua(e.target.value)
  }
  const cadastraNumero = (e) => {
    setNumero(e.target.value)
  }
  const cadastraComplemento = (e) => {
    setComplemento(e.target.value)
  }
  const cadastraTelefone = (e) => {
    setTelefone(e.target.value)
  }

  const dadosCadastrado = {
    nome: { nome },
    email: { email },
    senha: { senha },
    rua: { rua },
    numero: { numero },
    complento: { complento },
    telefone: { telefone },
    loginUser: { loginUser }
  }

  const renderizaTela = () => {
    switch (telaAtual) {
      case "TelaLogin":
        return <TelaLogin mudarTela={mudarTela}
          login={loginUser} fazerLogin={fazerLogin}
          senha={senha} cadastraSenha={cadastraSenha}
          dadosCadastrado={dadosCadastrado}
        />;

      case "TelaCadastro":
        return <TelaCadastro mudarTela={mudarTela}
          nome={nome} cadastraNome={cadastraNome}
          email={email} cadastraEmail={cadastraEmail}
          senha={senha} cadastraSenha={cadastraSenha}
          dadosCadastrado={dadosCadastrado}
        />;

      case "TelaCadastroEndereco":
        return <TelaCadastroEndereco mudarTela={mudarTela}
          rua={rua} cadastraRua={cadastraRua}
          numero={numero} cadastraNumero={cadastraNumero}
          complento={complento} cadastraComplemento={cadastraComplemento}
          telefone={telefone} cadastraTelefone={cadastraTelefone}
          dadosCadastrado={dadosCadastrado}
        />;

      case "TelaPrincipal":
        return <TelaPrincipal mudarTela={mudarTela} />

      default:
        return <p>Tela inválida</p>
    }
  }

  return (
    <MainContainer >
      <GlobalStyled />

      {renderizaTela()}
    </MainContainer>
  );
}

export default App;