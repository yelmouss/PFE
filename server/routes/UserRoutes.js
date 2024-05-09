const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

module.exports = router;


// La fonction router dans Express.js est une partie essentielle pour organiser 
// et gérer les routes dans les applications web. Une route est essentiellement 
// un chemin d'URL à travers lequel les clients peuvent accéder à différents services
// offerts par le serveur, par exemple obtenir des données, envoyer des données, etc. 
//  Voici comment la fonction router est utilisée et pourquoi elle est importante :

// Modularité et Organisation : L'utilisation de router aide à séparer les différentes
// parties de l'application en modules plus petits et gérables, souvent appelés routeurs.
// Cela permet de maintenir une structure claire et organisée, facilitant ainsi le développement 
//   et la maintenance du code, surtout dans de grandes applications.
// Définition de Routes : Avec router, vous pouvez définir des routes pour différentes
//  méthodes HTTP (comme GET, POST, PUT, DELETE, etc.). Chaque route peut être associée à une fonction
//   spécifique qui sera exécutée lorsque la route est accédée par un client. Dans l'exemple que vous 
//   avez donné,
//    une route POST est définie pour l'URL "/register", et la fonction UserController.register 
//    est définie comme gestionnaire pour cette route.