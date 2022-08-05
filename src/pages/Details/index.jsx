import { Header } from "../../components/Header/index.jsx";
import { Container, Content } from "./styles.js";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { Stars } from "../../components/Stars/index.jsx";
import { api } from "../../services/api.js";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useAuth } from "../../hooks/auth.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { useEffect, useState } from "react";

export function Details() {
  const { user } = useAuth();
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; 

  const params = useParams();
  const [data, setData] = useState(null);


  useEffect(()=>{
    async function fetchMovies(){
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    } 
    
    fetchMovies(); 
  },[])

  return(
    <Container>
      <Header/>
      {
        data &&
        <Content>
          <div>
            <button>          
              <FiArrowLeft color="#ff859b"/>
              Voltar
            </button>
          </div>
          <div className="title">
            <h1>data.title</h1>
            <Stars size={20} rating={data.rating}/>
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
          {  
            <div>
              {
                data.tags && data.tags.map( tag =>  (
                <Tag title={tag.name} key={String(tag.id)}/>))
              }
            </div>
          }
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut in accusamus veniam rerum facere ad? Molestiae hic iste, sed iusto quos laudantium quam velit non minus quas fuga nesciunt provident?
            </p>
          </div>
        </Content>
      }
      
    </Container>
  );
}