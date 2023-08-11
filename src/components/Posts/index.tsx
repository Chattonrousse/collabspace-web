import { ThumbsUp, ChatCircleText } from "phosphor-react";

import Avatar from "../Avatar";
import Comment from "../Comment";
import Inputarea from "../InputArea";
import Button from "../Button";

import {
  Container,
  Header,
  Autor,
  AutorInfo,
  Content,
  Description,
  Hashtags,
  Divider,
  Interactions,
  InteractionsInfo,
  CountReaction,
  CountComment,
  InteractionAction,
  ButtonAction,
  CommentArea,
  CommentForm,
  Comments,
} from "./styles";
import { useState } from "react";

const Post: React.FC = () => {
  const [commentArea, setCommentArea] = useState(false);

  function toggleCommentArea() {
    setCommentArea(!commentArea);
  }

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

      <Interactions>
        <InteractionsInfo>
          <CountReaction>
            <span>
              <ThumbsUp size={19} weight="bold" />
              32
            </span>
          </CountReaction>

          <CountComment>
            <span onClick={toggleCommentArea}>11 comentários</span>
          </CountComment>
        </InteractionsInfo>

        <InteractionAction>
          <ButtonAction>
            <ThumbsUp size={22} />
            Reagir
          </ButtonAction>
          <ButtonAction onClick={toggleCommentArea}>
            <ChatCircleText size={22} />
            Comentar
          </ButtonAction>
        </InteractionAction>
      </Interactions>

      <CommentArea commentArea={commentArea}>
        <CommentForm>
          <h1>Deixe seu cometário</h1>

          <Inputarea
            placeholder="Escreva seu comentário..."
            rows={3}
          ></Inputarea>

          <Button>Comentar</Button>
        </CommentForm>

        <Divider />

        <Comments>
          <Comment />
        </Comments>
      </CommentArea>
    </Container>
  );
};

export default Post;
