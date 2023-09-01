import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";

import LayoutDefault from "../../layouts/Default";

import AvatarCircle from "../../components/AvatarCircle";
import RequestFriend from "../../components/RequestFriend";
import FriendCard from "../../components/FriendCard";
import { listUserById } from "../../services/users";
import { IUser } from "../../services/users/types";

import { Camera, PencilSimple, MapPin, Phone, Clock } from "phosphor-react";

import {
  Container,
  Content,
  Overview,
  UserBanner,
  Cover,
  EditCoverButton,
  UserInfo,
  EditInfoButton,
  General,
  Total,
  Contact,
  Friends,
  FriendList,
  AreaFriendButton,
  Sidebar,
  Requests,
  RequestList,
} from "./styles";
import { useAuthentication } from "../../contexts/Authentication";

moment.defineLocale("pt-br", {
  weekdays: "Segunda_Terça_Quarta_Quinta_Sexta_Sábado_Domingo".split("_"),
  months:
    "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
      "_",
    ),
});

const Profile: React.FC = () => {
  const { id } = useParams();
  const { signOut } = useAuthentication();

  const [user, setUser] = useState<IUser | null>(null);

  const handleListUserBuyId = useCallback(async () => {
    try {
      if (id) {
        const { result, message, data } = await listUserById({ id });

        if (result === "success") {
          if (data) setUser(data.user);
        }

        if (result === "error") console.log(message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [id]);

  useEffect(() => {
    handleListUserBuyId();
  }, [id, handleListUserBuyId]);

  return (
    <LayoutDefault>
      <Container>
        <Content>
          <Overview>
            <UserBanner>
              <EditCoverButton>
                <Camera size={22} weight="fill" />
              </EditCoverButton>

              <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

              <div>
                <AvatarCircle
                  size="192px"
                  src={
                    user?.avatarUrl ||
                    "https://images-ext-1.discordapp.net/external/5hyJpFaJWGqRGEUP8osz0gM1MG5bIE37lqvs1RwdH6Q/https/i.imgur.com/HYrZqHy.jpg"
                  }
                />
              </div>

              <EditInfoButton>
                <PencilSimple size={22} weight="bold" />
              </EditInfoButton>
            </UserBanner>

            <UserInfo>
              <General>
                <h1>{user?.name}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Architecto nemo dolores id placeat facere eaque cumque, soluta
                  cum! Provident officiis aspernatur praesentium odit quaerat
                  voluptatibus quisquam sunt a quod beatae!
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

                {user?.telephone && (
                  <span>
                    <Phone size={20} weight="bold" />
                    (17) 99242-4418
                  </span>
                )}

                <span>
                  <Clock size={20} weight="bold" />
                  {moment(user?.createdAt).format("[Entrou em] MMMM [de] YYYY")}
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

          <a style={{ color: "white", marginTop: "16px" }} onClick={signOut}>
            Sair
          </a>
        </Sidebar>
      </Container>
    </LayoutDefault>
  );
};

export default Profile;
