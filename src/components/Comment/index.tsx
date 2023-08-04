import { Trash } from "phosphor-react";

import Avatar from "../Avatar";

import { Container, CommentBox, AuthorAndTime } from "./styles";

const Comment: React.FC = () => {
  return (
    <Container>
      <Avatar />

      <CommentBox>
        <AuthorAndTime>
          <h1>Chatton</h1>
          <time>Cerca de 2h</time>

          <button>
            <Trash size={22} />
          </button>
        </AuthorAndTime>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illum
          veritatis sunt assumenda distinctio? Ullam quasi assumenda et eaque
          voluptatem aperiam, quod eligendi eos nostrum? Molestiae qui id
          eveniet architecto...
        </p>
      </CommentBox>
    </Container>
  );
};

export default Comment;
