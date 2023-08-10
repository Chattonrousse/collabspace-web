import Avatar from "../Avatar";
import InputArea from "../InputArea";
import Button from "../Button";

import { Container, Content } from "./styles";

const CreatePost: React.FC = () => {
  return (
    <Container>
      <Content>
        <Avatar
          src="https://i.pinimg.com/474x/0b/d9/31/0bd9310126c6ea1044fef9be5e53dd1f.jpg"
          borderEffect
        />

        <InputArea rows={2} placeholder="O que temos para hoje..." />
      </Content>

      <Button>Publicar</Button>
    </Container>
  );
};

export default CreatePost;
