import { Container, Form, Label, Input, Button } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Entrar</h1>

        <section>
          <div>
            <Label htmlFor="">Endereço de e-mail:</Label>
            <Input type="" placeholder="Digite seu e-mail..." />
          </div>

          <div>
            <Label htmlFor="">Sua senha secreta</Label>
            <Input type="text" placeholder="Digite sua senha..." />
          </div>
        </section>

        <Button>Fazer Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
