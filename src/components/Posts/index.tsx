import Avatar from "../Avatar";
import Comment from "../Comment";

import {
  Container,
  Header,
  AutorInfo,
  Content,
  Description,
  Hashtags,
  Divider,
  CommentForm,
  Comments,
  Autor,
} from "./styles";

const Post: React.FC = () => {
  return (
    <Container>
      <Header>
        <Autor>
          <Avatar />

          <AutorInfo>
            <h1>Chatton Rousse</h1>
            <p>gecandido13@gmail.com</p>
          </AutorInfo>
        </Autor>

        <time>Publicado á 1h</time>
      </Header>

      <Content>
        <Description>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eum
            magnam adipisci voluptas, praesentium ipsam asperiores inventore
            placeat in est illum cupiditate? Ex dignissimos accusantium
            reiciendis, repellat impedit consequuntur hic!!!🎆
          </p>
        </Description>

        <Hashtags>
          <span>#collabspace </span>
          <span>#confia</span>
          <span>#LÁELE</span>
          <span>#Tchaau</span>
        </Hashtags>
      </Content>

      <Divider />

      <CommentForm>
        <h1>Deixe seu cometário</h1>

        <textarea name="" id="" rows={5}></textarea>

        <button>Comentar</button>
      </CommentForm>

      <Divider />

      <Comments>
        <Comment />
      </Comments>
    </Container>
  );
};

export default Post;
