import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Movie } from '../../components/Movie';
import { Button } from '../../components/Button';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function Home() {
  const button = <Link to="/new"><Button title="Adicionar filme" icon={FiPlus}/></Link>

  return(
    <Container>
      <Header/>
      <Content>
        <Section title="Meus filmes" elem={button}>
          <Movie data={{
            title:'Star Wars', 
            tags:[
              {id: 1, name: 'ficção'},
              {id: 2, name: 'aventura'}
            ],
            rating: 5
          }}
          />

          <Movie data={{
            title:'Velozes e Furiosos', 
            tags:[
              {id: 1, name: 'ação'},
              {id: 2, name: 'carros'}
            ],
            rating: 4

          }}
          />

          <Movie data={{
            title:'Homem Aranha', 
            tags:[
              {id: 1, name: 'ação'},
              {id: 2, name: 'aventura'}
            ],
            rating: 2

          }}
          />
          
        </Section>
      </Content>
    </Container>
  )
}