import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import TelaCadastroEndereco from "./components/TelaCadastroEndereco/TelaCadastroEndereco";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [valorCondicional, setValorCondicional] = useState(1)

  const mudarTela = (valor) => {
    setValorCondicional(valor)
  }

  // Resolução do exercício de fixação
  const renderizaTela = () => {
    switch (valorCondicional) {
      case 1:
        console.log(valorCondicional)
        return <TelaLogin mudarTela={mudarTela} />;
      case 2:
        console.log(valorCondicional)
        return <TelaCadastro mudarTela={mudarTela} />;
      case 3:
        console.log(valorCondicional)
        return <TelaCadastroEndereco mudarTela={mudarTela} />;
      case 4:
        console.log(valorCondicional)
        return <TelaUsuarioCadastrado />
      default:
        console.log(valorCondicional)
        return <TelaLogin mudarTela={mudarTela} />

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