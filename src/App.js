
import Inicio from "./components/inicio"
import Projetos from "./components/projetos"
import Sobre from "./components/sobre"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import * as S from "./style"

export default function App() {


  return (
    <>
      <S.GlobalStyle />
      <BrowserRouter>
        <S.Header>
          <S.Nav>
            <S.Ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/projetos">Projetos</Link>
              </li>
            </S.Ul>


          </S.Nav>

        </S.Header>


        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}