import { Header } from "../../components/Header/index.jsx";
import { Container, Content } from "./styles.js";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { Stars } from "../../components/Stars/index.jsx";
import { api } from "../../services/api.js";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useAuth } from "../../hooks/auth.jsx";
import { Tag } from "../../components/Tag/index.jsx";

export function Details() {
  const { user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; 

  return(
    <Container>
      <Header/>
      <Content>
        <div>
          <button>          
            <FiArrowLeft color="#ff859b"/>
            Voltar
          </button>
        </div>
        <div className="title">
          <h1>Titulo do filme</h1>
          <Stars size={20} rating={5}/>
        </div>
        <div className="info">
          <img 
            src={avatarURL} 
            alt={user.name}
            className="image-profile"
          />
          <span>Por {user.name}</span>
          <MdOutlineWatchLater color="#ff859b"/>
          <span>23/05/22 às 08:00</span>
        </div>
        <div>
          <Tag title="ação"/>
          <Tag title="aventura"/>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut in accusamus veniam rerum facere ad? Molestiae hic iste, sed iusto quos laudantium quam velit non minus quas fuga nesciunt provident?
          </p>
        </div>
      </Content>
      
    </Container>
  );
}