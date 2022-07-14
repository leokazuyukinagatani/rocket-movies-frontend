
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { MovieItem } from "../../components/MovieItem";

import { Container, Form, ButtonBack, Content } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

export function New() {
  return(
  <Container>
    <Header/>
      <Form>
        <section>
          <ButtonBack to="/">
            <FiArrowLeft/>
            Voltar
          </ButtonBack>
          
        </section>
       <Content>
        <h1>Novo filme</h1>
        <section>
          <div className="col-2">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota(de 0 a 5)" type="number" />
          </div>
          <Textarea placeholder="Observações"/>   
        </section>
        <section>
          <h2>Marcadores</h2>
          <div className="tags">
              <MovieItem value="react"/>
              <MovieItem placeholder="Nova tag" isNew/> 
          </div>
        </section> 
       </Content>
       <div className="buttons">
          <Button title="Excluir filme"/>

          <Button title="Salvar"/>
       </div>
      </Form>
    
  </Container>
 );
}