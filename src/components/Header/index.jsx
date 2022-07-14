import { Input } from "../Input"
import { Container, Profile, User} from "./styles"

export function Header() {
  return(
    <Container>
      <h2>RocketMovies</h2>
      <Input
        placeholder="Pesquisar pelo título"     
      />
      <User>
          <div>
            <strong>Leo Kazuyuki Nagatani</strong>
            <span>sair</span>
          </div>
        <Profile to="/profile">
          <img 
            src="https://github.com/leokazuyukinagatani.png" 
            alt="imagem de perfil do usuário" 
          />
        </Profile>
      </User>
      
      
    </Container>
  )
}