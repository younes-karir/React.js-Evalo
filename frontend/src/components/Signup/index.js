import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClearErr, registerUser } from "../../store/actions/authentication";

import {
  Base,
  SubGroup,
  Input,
  Label,
  LoginContainer,
  LoginWrapper,
  Logo,
  LogoContainer,
  SignupBox,
  SignupLink,
  SignupTitle,
  SignupWrapper,
  Span,
  Submit,
  Subtitle,
  Title,
  TitleContainer,
  Group,
} from "./Signup.elements";

const Signup = () => {
  const err = useSelector(state => state.errors);
  const isLoading = useSelector(state => state.loading.isLoading);

  const navigate = useNavigate();
  const Dispatch = useDispatch();

  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Confirm_Password, setConfirm_Password] = useState('');

  const NomHandler = (event) =>{
    setNom(event.target.value);
  }
  const PrenomHandler = (event) =>{
    setPrenom(event.target.value);
  }

  const EmailHandler = (event) =>{
    setEmail(event.target.value);
  }

  const PasswordHandler = (event) =>{
    setPassword(event.target.value);
  }

  const Confirm_PasswordHandler = (event) =>{
    setConfirm_Password(event.target.value);
  }

  const changeHandler = () =>{
     Dispatch (ClearErr());
  }

  const loginHandler = (event) =>{
    event.preventDefault();
    const user = {
      fname: Prenom,
      lname: Nom,
      email: Email,
      password: Password,
      password_confirm: Confirm_Password,
  }
  changeHandler()
  Dispatch(registerUser(user,navigate));
  }


  return (
    <LoginWrapper>
      <LoginContainer>
        <LogoContainer>
          <Logo>
            <Base>
              EVAL<Span>O</Span>
            </Base>
          </Logo>
        </LogoContainer>
        <SignupBox onSubmit={loginHandler}>
          <TitleContainer>
            <Title>Inscription</Title>
            <Subtitle>Vous pouvez accéder à partir d'ici</Subtitle>
          </TitleContainer>
          <Group row="true">
            <SubGroup width="50%">
            <Label iserr = {err['lname']}>{err['lname'] ? err['lname'] : 'Nom'}</Label>
              <Input 
              type="text"
              value={Nom}
              iserr = {err['lname']}
              onChange={NomHandler}
              />
            </SubGroup>
            <SubGroup width="50%">
            <Label iserr = {err['fname']}>{err['fname'] ? err['fname'] : 'Prenom'}</Label>
              <Input 
              type="text"
              value={Prenom}
              iserr = {err['fname']}
              onChange={PrenomHandler}
               />
            </SubGroup>
          </Group>
          <Group row="false">
            <SubGroup width="100%">
              <Label iserr = {err['email']}>{err['email'] ? err['email'] : 'Email'}</Label>
              <Input 
              type="text"
              value={Email}
              iserr = {err['email']}
              onChange={EmailHandler} 
              />
            </SubGroup>
          </Group>
          <Group row="true">
            <SubGroup width="50%">
              <Label iserr = {err['password']}>{err['password'] ? err['password'] : 'Mot de passe'}</Label>
              <Input 
              type="password"
              value={Password}
              iserr = {err['password']}
              onChange={PasswordHandler}
              />
            </SubGroup>
            <SubGroup width="50%">
            <Label iserr = {err['password_confirm']}>{err['password_confirm'] ? err['password_confirm'] : 'Mot de passe (*)'}</Label>
              <Input 
              type="password"
              value={Confirm_Password}
              iserr = {err['password_confirm']}
              onChange={Confirm_PasswordHandler}
               />
            </SubGroup>
          </Group>
          <SubGroup>
            <Submit>{isLoading ? '...loading' : 'Inscription'}</Submit>
          </SubGroup>
          <SignupWrapper>
            <SignupTitle>Vous avez un compte?</SignupTitle>
            <SignupLink to="/login" onClick={changeHandler} >Connexion</SignupLink>
          </SignupWrapper>
        </SignupBox>
      </LoginContainer>
    </LoginWrapper>
  );
};
export default Signup;
