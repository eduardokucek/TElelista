import { useEffect, useState } from "react";
import { Contact } from "../../interfaces";
import { api } from "../../services/api";
import { Container, List } from "./style";
import { Card } from "../../components/Card";
import { ModalAddContact } from "../../components/ModalAddContact";

export const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("/contacts");

      setContacts(response.data);
    })();
  }, []);

  return (
    <>
      <Container>
        <header>
          <button type="button" onClick={toggleModal}>
            Novo
          </button>
        </header>
        {isOpenModal && (
          <ModalAddContact
            setContacts={setContacts}
            toggleModal={toggleModal}
          />
        )}
        <main>
          <List>
            {contacts.map((contact) => (
              <Card key={contact.id} contact={contact} />
            ))}
          </List>
        </main>
      </Container>
    </>
  );
};
