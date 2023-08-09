import Avatar from "../Avatar";
import Comment from "../Comment";

import {
  Container,
  Header,
  Autor,
  AutorInfo,
  Content,
  Description,
  Hashtags,
  Divider,
  CommentForm,
  ButtonComment,
  Comments,
  Inputarea,
} from "./styles";

const Post: React.FC = () => {
  return (
    <Container>
      <Header>
        <Autor>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcY4JEsEOilNZnIPJ_Ot89c7anQ5_PA4RA6TgN4d0R8gFdVZutjuiSAreU8LUposuBNE&usqp=CAU"
            borderEffect
          />

          <AutorInfo>
            <h1>Dudy</h1>
            <p>dudygirl@gmail.com</p>
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

        <Inputarea name="" id="" rows={5}></Inputarea>

        <ButtonComment>Comentar</ButtonComment>
      </CommentForm>

      <Divider />

      <Comments>
        <Comment />
      </Comments>
    </Container>
  );
};

export default Post;
