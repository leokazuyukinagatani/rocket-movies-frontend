import { FiMail ,FiLock } from 'react-icons/fi'

import { Container, Form, Background} from './styles'

import { Input } from '../../components/Input'

import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn(){
    const error = await signIn({ email, password });
    if(error){
      return toast.error(String(error), {
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
  }

  return(
    <Container>
      <ToastContainer limit={3}/>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange= {(e) => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange= {(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/register">
          Criar conta
        </Link>
      </Form>
      <Background/>
    </Container>
  )
}