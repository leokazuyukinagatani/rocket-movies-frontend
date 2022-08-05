import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Movie } from '../../components/Movie';
import { Button } from '../../components/Button';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

import { Input } from '../../components/Input';

export function Home() {

  const[movies, setMovies] = useState([]);
  const[title, setTitle] = useState("");
  
  const input = <Input placeholder="Pesquisar pelo título" value={title} onChange={e => setTitle(e.target.value)} />

  const button = <Link to="/new"><Button title="Adicionar filme" icon={FiPlus}/></Link>
  useEffect(() => {
    async function fetchMovies(){
      try{
        const response = await api.get(`/movies?title=${title}`);
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
  },[title]);

  return(
    <Container>
      <Header element={input}/>
      <Content>
        <Section title="Meus filmes" elem={button}>
          {
            movies && movies.map((movie, index) =>(
              <Movie key={index} data={movie}/>
            ))
          }
         
          
        </Section>
      </Content>
    </Container>
  )
}