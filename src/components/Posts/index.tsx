import Avatar from "../Avatar";

import { Container, Content, Hashtags, Divider } from "./styles";

const Post: React.FC = () => {
  return (
    <Container>
      <header>
        <div>
          <Avatar />

          <section>
            <h1>Chatton Rousse</h1>
            <p>gecandido13@gmail.com</p>
          </section>
        </div>

        <p>Publicado á 1h</p>
      </header>

      <main>
        <Content>
          <p>
            - Que os emocionados, verdadeiros e de coração puro, se encontrem e
            vivam histórias únicas e recíprocas!
          </p>
        </Content>

        <Hashtags>
          <span>#collabspace </span>
          <span>#confia</span>
        </Hashtags>
      </main>

      <Divider />

      <footer>
        <h1>Deixe seu cometário</h1>

        <textarea name="" id="" rows={5}></textarea>

        <button>Comentar</button>
      </footer>
    </Container>
  );
};

export default Post;
