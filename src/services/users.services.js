//Los servicios se encargan del trabajo pesado de la lógica de negocio

const users = []; //Persistencia en memoria (creamos un array que simule la utilización de un modelo que aún no estamos utilizando)

const getAllUsers = () => {
  return users;
};

const createUser = (user) => {
  const newUser = {
    id: crypto.randomUUID(),
    name: user.name,
    email: user.email
  };
  users.push(newUser);
  return newUser;
};

export default {getAllUsers, createUser};