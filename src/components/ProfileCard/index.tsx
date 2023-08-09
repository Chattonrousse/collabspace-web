import {
  Container,
  Header,
  Cover,
  Content,
  Divider,
  ButtonEdit,
  Footer,
} from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Cover src="https://free4kwallpapers.com/uploads/originals/2021/02/04/future-tech-city-wallpaper.jpg" />

        <div>
          <Avatar
            src="https://i.pinimg.com/474x/0b/d9/31/0bd9310126c6ea1044fef9be5e53dd1f.jpg"
            borderEffect
          />
        </div>
      </Header>

      <Content>
        <h1>Chatton Rousse</h1>
        <p>gecandido13@gmail.com</p>
      </Content>

      <Divider />

      <Footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </Footer>
    </Container>
  );
};

export default ProfileCard;
