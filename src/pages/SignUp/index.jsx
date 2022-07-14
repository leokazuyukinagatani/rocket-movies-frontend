import { FiMail ,FiLock, FiUser,FiArrowLeft} from 'react-icons/fi'
import { Container, Form, Background} from './styles'

import { Input } from '../../components/Input'

import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

export function SignUp() {
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
        />

        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />
        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Cadastrar"/>
        <Link to="/">
          <FiArrowLeft/>
          voltar para o login
        </Link>
      </Form>
      <Background/>

    </Container>
  )
}