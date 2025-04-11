const express = require('express');
const router = express.Router();
const userActions=require("../../controllers/userController")
// Route de test initiale
router.get('/test', (req, res) => {
  res.json({ message: 'Route de test fonctionnelle !' });
});

/**
 * D'après l'architecture du projet, le controller va effectuer 98% des taches du router
 */

router.get("/allUser",userActions.getAllUsers)
router.get("/getUser",userActions.getUserById)
router.get("/create",userActions.createUser)
router.get("/update",userActions.updateUser)
router.get("/delete",userActions.deleteUser)


module.exports = router;