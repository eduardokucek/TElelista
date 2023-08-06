import { useForm } from "react-hook-form";
import { Contact, ModalEditContactProps } from "../../interfaces";
import { Modal } from "../../pages/Modal";
import {
  ContactUpdateData,
  contactUpdateSchema,
} from "../../validators/validator.modal";
import { ModalForm } from "../ModalAddContact/style";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { FormButtons } from "./style";

export const ModalEditContact = ({
  toggleModal,
  contact,
  setContacts,
}: ModalEditContactProps) => {
  const { register, handleSubmit } = useForm<ContactUpdateData>({
    resolver: zodResolver(contactUpdateSchema),
  });

  const updateContact = async (data: ContactUpdateData) => {
    await api.patch(`/contacts/${contact.id}`, data);

    const listContacts = await api.get<Contact[]>("/contacts");

    setContacts(listContacts.data);

    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal} blockClosing>
      <ModalForm onSubmit={handleSubmit(updateContact)}>
        <label htmlFor="text">Nome</label>
        <input
          type="text"
          id="name"
          defaultValue={contact.name}
          {...register("name")}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          defaultValue={contact.email}
          {...register("email")}
        />

        <label htmlFor="text">Telefone</label>
        <input
          type="text"
          id="phone"
          defaultValue={contact.phone}
          {...register("phone")}
        />
        <FormButtons>
          <button type="submit">Salvar</button>
          <button type="button" onClick={toggleModal}>
            Cancelar
          </button>
        </FormButtons>
      </ModalForm>
    </Modal>
  );
};
