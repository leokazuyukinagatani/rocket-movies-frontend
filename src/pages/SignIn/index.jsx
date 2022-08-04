import { FiMail ,FiLock } from 'react-icons/fi'

import { Container, Form, Background} from './styles'

import { Input } from '../../components/Input'

import { Button } from '../../components/Button'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignIn(){
    const error = await signIn({ email, password });
    if(error){
      return toast.error(String(error));
    }
  }
  function handleSignUp() {
    navigate("/register");
  }

  return(
    <Container>
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

        <Button  title="Criar conta" className="btn-register" onClick={handleSignUp}/>

      </Form>
      <Background/>
    </Container>
  )
}