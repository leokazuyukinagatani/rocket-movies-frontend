import { useState } from 'react'
import { FiMail ,FiLock, FiUser,FiArrowLeft} from 'react-icons/fi'
import { Container, Form, Background} from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api';
import isEmail from 'validator/lib/isEmail';
import { ToastContainer, toast } from 'react-toastify';

export function SignUp() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigate = useNavigate();

  function handleSignUp(){

    if(!name || !email || !password){
      return toast.error("Preencha todos os campos.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
        });
    }
    if(!isEmail(email)){
      return toast.error("Email invalido", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
        });
    }
    
    api.post("/users",{ name, email, password })
    .then(() => {
      navigate("/");
    })
    .catch( error => {
      if(error.response){
        toast.error("Preencha todos os campos.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
          });
      }else{
        toast.error("Não foi possivel cadastrar o usuário.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
          });
      }
    });
  }

  return(
    <Container>
      <ToastContainer/>
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