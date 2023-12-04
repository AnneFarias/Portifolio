// import * as S from "../style";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  div:nth-child(1) {
    img {
      border-radius: 50%;
      width: 500px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 15px;
    }
  }
`;

export default function Inicio() {
  return (
    <>
      <img src="https://images.app.goo.gl/BARyVpnVdJPQAZRS7" alt="" />

      <Section>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/112137618?s=400&u=f847c0ebe24874bd682e90a5446f5eb5febd5da5&v=4"
            alt=""
          />
        </div>

        <div>
          <h1>Olá! Eu sou a Anne Karol</h1>
          <h2>Desenvolvedora Front-end</h2>
          <div>
            <a href="" download={true}>
              <img
                width="40px"
                alt="Curriculum Vitae"
                src="https://cdn-icons-png.flaticon.com/512/662/662345.png"
              />
            </a>

            <a href="https://github.com/AnneFarias" target="_blanck">
              <img
                width="40px"
                alt="Github"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anne-farias-418556b9/"
              target="_blanck"
            >
              <img
                width="55px"
                alt="Linkedin"
                src="https://img.shields.io/badge/-000?-the-badge&logo=linkedin&logoColor=0E76A8"
              />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
