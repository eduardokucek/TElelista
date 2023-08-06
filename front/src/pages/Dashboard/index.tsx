import { useEffect, useState } from "react";
import { Contact, User } from "../../interfaces";
import { api } from "../../services/api";
import { Container, List } from "./style";
import { Card } from "../../components/Card";
import { ModalAddContact } from "../../components/ModalAddContact";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import jwt_decode from "jwt-decode";

export const Dashboard = () => {
  const [user, setUser] = useState<User>();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const handleLogOut = () => {
    navigate("/");
    window.localStorage.removeItem("telelista:token");
  };

  useEffect(() => {
    setTimeout(() => {
      async function loadUserData() {
        const token = localStorage.getItem("telelista:token");
        const decoded = jwt_decode(token!);
        const foundUser = await api.get<User>(`/users/${decoded.sub!}`);
        setUser(foundUser.data!);
      }
      async function loadContacts() {
        try {
          const response = await api.get<Contact[]>("/contacts");

          setContacts(response.data);
          setRemoveLoading(true);
        } catch (error) {
          console.log(error);
        }
      }
      loadUserData();
      loadContacts();
    }, 1500);
  }, []);

  return (
    <>
      <Container>
        <header>
          <button type="button" onClick={toggleModal}>
            Novo
          </button>
          <button type="button" onClick={handleLogOut}>
            Sair
          </button>
        </header>

        {isOpenModal && (
          <ModalAddContact
            toggleModal={toggleModal}
            setContacts={setContacts}
          />
        )}
        <main>
          {user && <h3>Olá, {user.name}</h3>}
          {!removeLoading && <Loading />}
          {contacts.length > 0 ? (
            <List>
              {contacts.map((contact) => (
                <Card
                  key={contact.id}
                  contact={contact}
                  setContacts={setContacts}
                />
              ))}
            </List>
          ) : (
            <List>
              <li>Você não possui nenhum contato cadastrado</li>
            </List>
          )}
        </main>
      </Container>
    </>
  );
};
