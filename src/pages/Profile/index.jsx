import { FiArrowLeft, FiUser,FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Form , Avatar } from "./styles";
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useState } from "react";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; 
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);


  async function handleUpdate() {
    const  user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
      avatar
    }

    const error = await updateProfile({ user, avatarFile });
    if(!error){
      return toast.success("Perfil atualizado com sucesso!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
        });
    }else {
      return toast.error(error, {
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

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return(
    <Container>
      <ToastContainer/>
        <header>
          <Link to="/">
            <FiArrowLeft />
            <span>Voltar</span>
          </Link>
        </header>

        <Form>
          <Avatar>
            <img 
              src={avatar}
              alt="Foto do usuário" 
              />
            <label htmlFor="avatar">
              <FiCamera/>

              <input 
                id="avatar" 
                type="file"
                onChange={handleChangeAvatar}
              />              
            </label>

          </Avatar>
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="E-mail"
            type="email"
            icon={FiMail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Input
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
            onChange={(e) => setPasswordOld(e.target.value)}
          />

          <Input
            placeholder="Nova senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPasswordNew(e.target.value)}
          />

          <Button title="Salvar" onClick={handleUpdate}/>

        </Form>

    </Container>
  );
}