import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Movie } from '../../components/Movie';
import { Button } from '../../components/Button';
import { FiPlus } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

import { Input } from '../../components/Input';

export function Home() {

  const[movies, setMovies] = useState([]);
  const[search, setSearch] = useState("");
  
  const input = <Input placeholder="Pesquisar pelo título" value={search} onChange={e => setSearch(e.target.value)} />

  const button = <Link to="/new"><Button title="Adicionar filme" icon={FiPlus}/></Link>
  
  const navigate = useNavigate();
  
  function handleDetails(id) {
    navigate(`/details/${id}`);
  }
  
  useEffect(() => {
    async function fetchMovies(){
      try{
        const response = await api.get(`/movies?title=${search}`);
        console.log(response);
        setMovies(response.data);
      }catch(error){
        if(error.data){
          toast.error(error.data.message);
        }
        else{
          toast.error("não foi possível encontrar o filme solicitado");
        }
      }
    }

    fetchMovies();
  },[search]);

  return(
    <Container>
      <Header element={input}/>
      <Content>
        <Section title="Meus filmes" elem={button}>
          {
            movies && movies.map((movie) =>(
              <Movie key={movie.id} data={movie}
              onClick={() => handleDetails(movie.id)}
              /> 
            ))
          }
          
        </Section>
      </Content>
    </Container>
  )
}