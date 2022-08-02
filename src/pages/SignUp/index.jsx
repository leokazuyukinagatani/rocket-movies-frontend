import { useState } from 'react'
import { FiMail ,FiLock, FiUser,FiArrowLeft} from 'react-icons/fi'
import { Container, Form, Background} from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api';
import isEmail from 'validator/lib/isEmail';

export function SignUp() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigate = useNavigate();

  function handleSignUp(){

    if(!name || !email || !password){
      return alert("Preencha todos os campos!");
    }
    if(!isEmail(email)){
      return alert("Email inválido!");
    }
    
    api.post("/users",{ name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso.")
      navigate("/");
    })
    .catch( error => {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível cadastrar o usuário");
      }
    });
  }

  return(
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">
          <FiArrowLeft/>
          voltar para o login
        </Link>
      </Form>
      <Background/>

    </Container>
  )
}