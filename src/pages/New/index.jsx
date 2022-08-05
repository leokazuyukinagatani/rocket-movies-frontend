
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { MovieItem } from "../../components/MovieItem";

import { Container, Form, ButtonBack, Content } from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));

  }

  async function handleNewMovie() {
    if(!title || !rating || !description){
      return toast.error("Preencha todos os campos");
    }
    if(newTag){
      return toast.error("Existe uma tag não adicionada");
    }
    try{
     
      await api.post("/movies",{
        title,
        rating,
        description,
        tags
      });
      toast.success("Filme cadastrado com sucesso!",navigate("/"));

    }catch(error){
      if(error.response){
        return toast.error(error.response.data.message);
      }else {
        return toast.error("Não foi possível cadastrar o filme.");
      }
    }
 
  }
  
  function handleClearMovie() {
    setTitle("");
    setRating("");
    setDescription("");
    setTags([]);
    setNewTag("");
  }


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
            <Input 
              placeholder="Título" 
              onChange={e => setTitle(e.target.value)}
              value={title}
              />
            <Input 
              placeholder="Sua nota(de 0 a 5)" 
              type="number"
              min="1"
              max="5"
              onChange={e => setRating(e.target.value)}
              value={rating}
              />
          </div>
          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
            value={description}
            />   
        </section>
        <section>
          <h2>Marcadores</h2>
          <div className="tags">

              {
                tags.map((tag, index) => (
                  <MovieItem 
                    key={index} 
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                    />
                ))
              }
              
              <MovieItem 
                placeholder="Nova tag" 
                isNew
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              /> 
          </div>
        </section> 
       </Content>
       <div className="buttons">
          <Button title="Excluir filme" onClick={handleClearMovie}/>

          <Button title="Salvar" onClick={handleNewMovie}/>
       </div>
      </Form>
    
  </Container>
 );
}