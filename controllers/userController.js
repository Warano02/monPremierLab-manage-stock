const userService = require("../services/userService");

// [Fonction pour gérer la requête GET /users.
// Récupère tous les utilisateurs via le service et renvoie une réponse JSON.]
const getAllUsers = (req, res) => {
  res.json({
    error: false,
    message: "All users",
    users: userService.getAllUsers(),
  });
};

// [Fonction pour gérer la requête GET /users/:id.
// Récupère un utilisateur par ID via le service et renvoie une réponse JSON ou une erreur 404 si non trouvé.]
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) return res.status(400).json({ error: true, message: "Bad request" });
  const user = userService.getUserById(id);
  res.status(!user ? 404 : 200).json({
    error: !user,
    message: !user ? "Not Found !" : "your user !",
    user,
  });
};

const createUser = (req, res) => {
  const user = req.body;
  const result = userService.createUser(user);
  res.status(!result ? 400 : 201).json({
    error: !result,
    message: !result ? "Bad request" : "Utilisateur crée",
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = req.body;
  const result = userService.updateUser(id, user);
  res.status(!result ? 404 : 201).json({
    error: false,
    message: !result ? "Utilisateur a modifier non trouver" : "Done",
    data: result || [],
  });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const result = userService.deleteUser(id);
  res.status(!result ? 404 : 200).json({
    error: !result,
    message: !result ? "utilisateur non trouver" : "Fait",
    deleteUser: result || {},
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
