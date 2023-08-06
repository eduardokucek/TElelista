import { useForm } from "react-hook-form";
import { ModalEditUserProps } from "../../interfaces";
import { Modal } from "../../pages/Modal";
import {
  UserUpdateData,
  userUpdateSchema,
} from "../../validators/validator.modal";
import { ModalForm, FormButtons } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";

export const ModalEditUser = ({
  toggleModal,
  user,
  setUser,
}: ModalEditUserProps) => {
  const { register, handleSubmit } = useForm<UserUpdateData>({
    resolver: zodResolver(userUpdateSchema),
  });

  const updateUser = async (data: UserUpdateData) => {
    const response = await api.patch(`/users/${user.id}`, data);

    setUser(response.data);

    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal} blockClosing>
      <ModalForm onSubmit={handleSubmit(updateUser)}>
        <label htmlFor="text">Nome</label>
        <input
          type="text"
          id="name"
          defaultValue={user.name}
          {...register("name")}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          defaultValue={user.email}
          {...register("email")}
        />

        <label htmlFor="text">Telefone</label>
        <input
          type="text"
          id="phone"
          defaultValue={user.phone}
          {...register("phone")}
        />

        <label htmlFor="text">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="******"
          // defaultValue={user.password}
          {...register("password")}
        ></input>
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
