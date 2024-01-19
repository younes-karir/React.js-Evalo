import {
  Base,
  Group,
  GroupS,
  Input,
  Label,
  LoginBox,
  LoginContainer,
  LoginWrapper,
  Logo,
  LogoContainer,
  SignupLink,
  SignupTitle,
  SignupWrapper,
  Span,
  Submit,
  Subtitle,
  Title,
  TitleContainer,
} from "./Login.elements";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ClearErr, loginUser } from "../../store/actions/authentication";
import { useNavigate } from "react-router-dom";

// toast.configure();
const Login = (props) => {
  const Dispatch = useDispatch();
  const navigate = useNavigate();


  const err = useSelector((state) => state.errors);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector(state => state.loading.isLoading);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const changeHandler = () =>{
    Dispatch (ClearErr());
 }

  const LoginHAndler = (event) => {
    event.preventDefault();
    const user = {
      email: Email,
      password: Password,
    };
    Dispatch (ClearErr());
    Dispatch(loginUser(user));
    
  };

  useEffect(() => {
   
      if(isAuth){
        navigate('/accueil/',{
          replace:true,
        })
      
    }
   
  }, [isAuth,navigate])
  

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
        <LoginBox onSubmit={LoginHAndler}>
          <TitleContainer>
            <Title>Connexion</Title>
            <Subtitle>Vous pouvez accéder à partir d'ici</Subtitle>
          </TitleContainer>
          <Group>
            <Label iserr={err["email"]}>
              {err["email"] ? err["email"] : "Email"}
            </Label>
            <Input
              type="text"
              name="email"
              value={Email}
              iserr = {err['email']}
              onChange={EmailHandler}
            />
          </Group>
          <Group>
          <Label iserr = {err['password']}>{err['password'] ? err['password'] : 'Mot de passe'}</Label>
            <Input
              type="password"
              name="password"
              value={Password}
              iserr = {err['password']}
              onChange={PasswordHandler}
            />
          </Group>
          <GroupS>
            <Submit>{isLoading ? '...loading' : 'Connexion'}</Submit>
          </GroupS>
          <SignupWrapper>
            <SignupTitle>Vous n'avez pas encore de compte?</SignupTitle>
            <SignupLink to="/signup" onClick={changeHandler}>S'inscrire</SignupLink>
          </SignupWrapper>
        </LoginBox>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default Login;
