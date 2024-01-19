import {
  Base,
  Group,
  GroupLine,
  GroupS,
  Input,
  Label,
  LoginBox,
  LoginContainer,
  LoginWrapper,
  Logo,
  LogoContainer,
  Span,
  Submit,
  Subtitle,
  Title,
  TitleContainer,
} from "./Auth.elements";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Assign } from "../../../../store/actions/questionnaire";
import { useEffect } from "react";

// toast.configure();
const Auth = (props) => {
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.loading.isLoading);
  const isActive = useSelector((state) => state.questionnaire.isAcive);

  const [Email, setEmail] = useState("");
  const [Code, setCode] = useState("");

  useEffect(() => {
    if (isActive) {
      navigate("/questionnaire/start", {
        replace: true,
      });
    }
  }, [isActive, navigate]);

  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const CodeHandler = (event) => {
    setCode(event.target.value);
  };

  const LoginHAndler = (event) => {
    event.preventDefault();

    const EleveInfos = {
      email: Email,
      code: Code,
    };

    Dispatch(Assign(EleveInfos));
  };

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
            <Title>s'identifier</Title>
            <Subtitle>
              Inserer votre adresse email et le code d'activation pour commancer
              le test.
            </Subtitle>
          </TitleContainer>
          <Group>
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              value={Email}
              onChange={EmailHandler}
            />
          </Group>
          <GroupLine>
            <GroupS width="70%">
              <Label>Code d'activation</Label>
              <Input
                type="text"
                name="code"
                value={Code}
                onChange={CodeHandler}
              />
            </GroupS>
            <GroupS width="fit-content">
              <Submit>{isLoading ? "En cours ..." : "Commancer"}</Submit>
            </GroupS>
          </GroupLine>
        </LoginBox>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default Auth;
