// Exemple de table qui stimule la bd
let users = [
  { id: 1, name: "Nguefack", email: "nguefack@gmail.com" },
  { id: 2, name: "Mock", email: "mock@gmail.com" },
  { id: 3, name: "Junior1", email: "Junior1@gmail.com" },
  { id: 4, name: "Lovly", email: "Lovly@gmail.com" },
  { id: 5, name: "Muriel", email: "muriel@gmail.com" },
  { id: 6, name: "Maeva", email: "maeva@gmail.com" },
  { id: 7, name: "Moukouri", email: "moukouri@gmail.com" },
];

const getAllUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find((el) => el.id === id) || null;
};

/**
 *
 * @param {object} userData | Données de l'utilisateur a crée sous la forme {name:"Nom de l'utilisateur",email:"email"}
 * @returns boolean | l'utilisateur a t'il été crée ou pas?
 */
const createUser = (userData) => {
  if (!userData.name || !userData.email) return;
  let newUser = { ...userData };
  let userId = users.length + 1;
  newUser.id = userId;
  users.push(newUser);
  return true;
};

// [Fonction pour mettre à jour un utilisateur existant par son ID.
// Met à jour les champs fournis et retourne l'utilisateur modifié ou null s'il n'existe pas.]
const updateUser = (id, userData) => {
  // [Ajoutez votre logique ici, par exemple en utilisant findIndex()]
  const index = users.findIndex((el) => el.id === id);
  if (index === -1) return null;
  users[index] = { ...userData };
  return users[index];
};

// [Fonction pour supprimer un utilisateur par son ID.
// Retire l'utilisateur du tableau et retourne l'utilisateur supprimé ou null s'il n'existe pas.]
const deleteUser = (id) => {
  // [Ajoutez votre logique ici]
  const index = users.findIndex((el) => el.id === id);
  if (index === -1) return null;
  const userDelete = users[index];
  users = users.splice(index, 1)[0]; // supprime l'utilisateur
  return userDelete;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

/**
 * Note : Pour cet atelier, il n’est pas nécessaire d’utiliser une base de données.
 * Le tableau 'users' agit comme une source de données en mémoire pour simplifier l’apprentissage.
 */
