import { useState } from "react";
import { CardProps, Contact } from "../../interfaces";
import { Actions, ContactData, ContactInfo, Container, Data } from "./style";
import { ModalEditContact } from "../ModalEditContact";
import { api } from "../../services/api";

export const Card = ({ contact, setContacts }: CardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const deleteContact = async () => {
    await api.delete(`/contacts/${contact.id}`);

    const listContacts = await api.get<Contact[]>("/contacts");

    setContacts(listContacts.data);
  };

  return (
    <>
      {isOpenModal && (
        <ModalEditContact
          contact={contact}
          toggleModal={toggleModal}
          setContacts={setContacts}
        />
      )}
      <Container>
        <Data>
          <ContactInfo>
            <span>Nome:</span>
            <span>E-mail:</span>
            <span>Telefone:</span>
            <span>Adicionado em:</span>
          </ContactInfo>
          <ContactData>
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <span>{contact.createdAt}</span>
          </ContactData>
        </Data>
        <Actions>
          <button type="button" onClick={toggleModal}>
            Editar
          </button>
          <button type="button" onClick={deleteContact}>
            Excluir
          </button>
        </Actions>
      </Container>
    </>
  );
};
