import { useEffect, useState } from "react";
import { Contact } from "../../interfaces";
import { api } from "../../services/api";
import { Container, List } from "./style";
import { Card } from "../../components/Card";
import { ModalAddContact } from "../../components/ModalAddContact";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

export const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

  const navigate = useNavigate();

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const handleLogOut = () => {
    navigate("/");
    window.localStorage.removeItem("telelista:token");
  };

  useEffect(() => {
    setTimeout(() => {
      async function loadContacts() {
        try {
          const response = await api.get<Contact[]>("/contacts");
          setContacts(response.data);
          setRemoveLoading(true);
        } catch (error) {
          console.log(error);
        }
      }
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
            {" "}
            Sair
          </button>
        </header>
        {isOpenModal && (
          <ModalAddContact
            setContacts={setContacts}
            toggleModal={toggleModal}
          />
        )}
        <main>
          {!removeLoading && <Loading />}
          {contacts.length == 0 ? (
            <List>
              <li>Você não possui nenhum contato cadastrado</li>
            </List>
          ) : (
            <List>
              {contacts.map((contact) => (
                <Card key={contact.id} contact={contact} />
              ))}
            </List>
          )}
        </main>
      </Container>
    </>
  );
};
