import { Container, Form, Group, Label, Input, Button } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Entrar</h1>

        <Group>
          <Label htmlFor="">Endereço de e-mail:</Label>
          <Input type="" placeholder="Digite seu e-mail..." />
        </Group>

        <Group>
          <Label htmlFor="">Sua senha secreta</Label>
          <Input type="text" placeholder="Digite sua senha..." />
        </Group>

        <Button>Fazer Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
