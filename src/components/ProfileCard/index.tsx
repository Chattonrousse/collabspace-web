import { ButtonEdit, Container, Cover, Divider } from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <header>
        <Cover src="https://free4kwallpapers.com/uploads/originals/2021/02/04/future-tech-city-wallpaper.jpg" />

        <div>
          <Avatar />
        </div>
      </header>

      <main>
        <h1>Chatton Rousse</h1>
        <p>gecandido13@gmail.com</p>
      </main>

      <Divider />
      <footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </footer>
    </Container>
  );
};

export default ProfileCard;
