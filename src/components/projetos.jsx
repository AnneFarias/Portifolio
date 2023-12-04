import styled from "styled-components";

const Imagem = styled.img`
  width: 40vw;
  height: 300px;
`;
const Figure = styled.figure`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border: solid;
`;

const MeusProjetos = styled.section`
  display: flex;
  flex-direction: column;
    justify-content: center;
    Align-items: center;
    padding: 20px;
    gap: 20px;
`;


export default function Projetos() {
  return (
    <>
      <MeusProjetos>
        <section>
          <h2>Meus Projetos</h2>
        </section>

        <Figure>
          <a href="www.meuprojeto.github.com.br">
            <Imagem src="" alt="" />
          </a>

          <a href="www.meuprojeto.github.com.br">
            <Imagem src="" alt="" />
          </a>
          <a href="www.meuprojeto.github.com.br">
            <Imagem src="" alt="" />
          </a>

          {/* <a href="www.meuprojeto.github.com.br"> */}
          {/* <Imagem src=   alt="" /></a> */}
        </Figure>
      </MeusProjetos>
    </>
  );
}
