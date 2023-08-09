import { Trash } from "phosphor-react";

import Avatar from "../Avatar";

import { Container, CommentBox, AuthorAndTime, ButtonDelete } from "./styles";

const Comment: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://i.pinimg.com/550x/91/56/e9/9156e9d0007bf8d19331189fd269744c.jpg" />

      <CommentBox>
        <AuthorAndTime>
          <h1>User15248</h1>
          <time>Cerca de 2h</time>

          <ButtonDelete>
            <Trash size={22} />
          </ButtonDelete>
        </AuthorAndTime>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illum
          veritatis sunt assumenda distinctio? Ullam quasi assumenda et eaque
          voluptatem aperiam, quod eligendi eos nostrum? Molestiae qui id
          eveniet architecto...😳
        </p>
      </CommentBox>
    </Container>
  );
};

export default Comment;
