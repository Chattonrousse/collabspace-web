import { Container, Avatar, Info } from "./style";

const FriendCard: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://i.pinimg.com/736x/b7/65/02/b76502e936cd209b595bd7a537e74db4.jpg" />

      <Info>
        <h1>Chatton Rousse</h1>
        <p>268 amigos em comum</p>
      </Info>
    </Container>
  );
};

export default FriendCard;
