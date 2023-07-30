import { useEffect, useState } from "react";
import { Contact } from "../../interfaces";
import { api } from "../../services/api";
import { Container, List } from "./style";
import { Card } from "../../components/Card";
import { ModalAddContact } from "../../components/ModalAddContact";

export const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("/contacts");

      setContacts(response.data);
    })();
  }, []);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

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
              // <li key={contact.id}>{contact.name}</li>
            ))}
          </List>
        </main>
      </Container>
    </>
  );
};
