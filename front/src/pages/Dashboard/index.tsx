import { useEffect, useState } from "react";
import { Contact, User } from "../../interfaces";
import { api } from "../../services/api";
import { Container, List } from "./style";
import { Card } from "../../components/Card";
import { ModalAddContact } from "../../components/ModalAddContact";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import jwt_decode from "jwt-decode";
import { ModalEditUser } from "../../components/ModalEditUser";

export const Dashboard = () => {
  const [user, setUser] = useState<User>({});
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenUserModal, setIsOpenUserModal] = useState(false);

  const navigate = useNavigate();

  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const toggleUserModal = () => setIsOpenUserModal(!isOpenUserModal);

  const handleLogOut = () => {
    navigate("/");
    window.localStorage.removeItem("telelista:token");
  };

  useEffect(() => {
    setTimeout(() => {
      async function loadUserData() {
        const token = localStorage.getItem("telelista:token");
        const decoded: string = jwt_decode(token!);

        const foundUser = await api.get<User>(`/users/${decoded.sub!}`);
        if (foundUser) {
          setUser(foundUser.data!);
        }
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
    }, 1000);
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
        {isOpenUserModal && (
          <ModalEditUser
            toggleUserModal={toggleUserModal}
            setUser={setUser}
            user={user}
          />
        )}
        <main>
          {!removeLoading ? (
            <Loading />
          ) : (
            <>
              {user && <h3 onClick={toggleUserModal}>Olá, {user.name}</h3>}
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
                  <li>
                    <span>Você não possui nenhum contato cadastrado</span>
                  </li>
                </List>
              )}
            </>
          )}
        </main>
      </Container>
    </>
  );
};
