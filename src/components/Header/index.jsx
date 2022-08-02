import { Input } from "../Input"
import { Container, Profile, User} from "./styles"
import { useAuth } from "../../hooks/auth" 
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";


export function Header() {
  const { signOut, user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; 

  return(
    <Container>
      <h2>RocketMovies</h2>
      <Input
        placeholder="Pesquisar pelo título"     
      />
      <User>
          <div>
            <strong>{user.name}</strong>
            <button onClick={signOut}>sair</button>
          </div>
        <Profile to="/profile">
          <img 
            src={avatarURL} 
            alt={user.name} 
          />
        </Profile>
      </User>
      
      
    </Container>
  )
}