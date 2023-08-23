import LayoutDefault from "../../layouts/Default";

import RequestFriend from "../../components/RequestFriend";

import { Camera, PencilSimple, MapPin, Phone, Clock } from "phosphor-react";

import {
  Content,
  Overview,
  UserBanner,
  Cover,
  Avatar,
  EditInfoButton,
  UserInfo,
  General,
  Contact,
  Total,
  Requests,
  Container,
  RequestList,
  Sidebar,
  Friends,
  FriendList,
  AreaFriendButton,
  EditCoverButton,
} from "./styles";
import FriendCard from "../../components/friendCard";

const Profile: React.FC = () => {
  return (
    <LayoutDefault>
      <Container>
        <Content>
          <Overview>
            <UserBanner>
              <EditCoverButton>
                <Camera size={24} weight="fill" />
              </EditCoverButton>
              <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

              <Avatar src="https://i.pinimg.com/736x/b7/65/02/b76502e936cd209b595bd7a537e74db4.jpg" />

              <EditInfoButton>
                <PencilSimple size={22} weight="bold" />
              </EditInfoButton>
            </UserBanner>

            <UserInfo>
              <General>
                <h1>Gegeh Cândido</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus voluptate, hic nihil itaque natus suscipit.
                </p>

                <Total>
                  <span>
                    <strong>115</strong> publicações
                  </span>
                  <span>
                    <strong>1562</strong> amigos
                  </span>
                </Total>
              </General>

              <Contact>
                <span>
                  <MapPin size={20} weight="bold" />
                  Jaborandi, São Paulo, Brasil
                </span>
                <span>
                  <Phone size={20} weight="bold" />
                  (17) 991008354
                </span>
                <span>
                  <Clock size={20} weight="bold" />
                  Entrou em fevereiro de 2023
                </span>
              </Contact>
            </UserInfo>
          </Overview>

          <Friends>
            <h1>Amigos</h1>
            <FriendList>
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
              <FriendCard />
            </FriendList>

            <AreaFriendButton>
              <button>Ver todos os amigos</button>
            </AreaFriendButton>
          </Friends>
        </Content>

        <Sidebar>
          <Requests>
            <h1>Solicitações de amizade</h1>

            <RequestList>
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
            </RequestList>
          </Requests>
        </Sidebar>
      </Container>
    </LayoutDefault>
  );
};

export default Profile;
