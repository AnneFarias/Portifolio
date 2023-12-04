import styled from "styled-components";

const SobreInfo = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px;

  section {
    div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      background-color: #dda0dd;
      padding: 20px;
      margin: 20px;
      width: 60vw;
      height: 50vh;
      box-shadow: 0 0 10px #000;
      gap: 20px;
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      background-color: #dda0dd;
      padding: 20px;
      margin: 20px;
      width: 60vw;
      height: 50vh;
      box-shadow: 0 0 10px #000;
      gap: 20px;
      span {
        display: flex;
        gap: 20px;
      }
    }
  }
`;

export default function Sobre() {
  return (
    <>
      <SobreInfo>
        <section>
          <div>
            <h2>Um pouco sobre mim!</h2>
            <p>
              Meu nome é Anne Karollyne, tenho 30 anos sou um apaixonada por
              tecnologia, gosto de resolver problemas do dia a dia e que me
              fizeram seguir no caminho da programação.
            </p>
            <p>
              Em setembro de 2022 comecei meus estudos na faculdade de análise e
              desenvolvimento de sistemas, onde comecei a entrar nesse universo
              de desenvolvimento.
            </p>
            <p>
              Em Abril de 2023, comecei o curso da vai na web, que teve duração
              até Dezembro de 2023, onde aprendi os principais conceitos de
              front-end e coloquei em prática nos meus projetos.
            </p>
          </div>
          <div>
            <h2>Minhas Habilidades 📒</h2>
            <span>
              <img
                height="90"
                width="70"
                alt="Github"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              />
              <img
                height="90"
                width="70"
                alt="Github"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              />
              <img
                height="90"
                width="70"
                alt="Github"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              />
              <img
                height="90"
                width="70"
                alt="Github"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              />
              <img
                height="90"
                width="70"
                alt="Github"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
              />
              <img
                height="90"
                width="70"
                alt="Github"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
              />
              

              
            </span>
          </div>
        </section>
      </SobreInfo>
    </>
  );
}
