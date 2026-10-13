const UserData = require('./userData');
const { MyUsers } = require('./userData');

const result1 = UserData.formatUsers(UserData.MyUsers);
const result2 = UserData.GetAdults(UserData.MyUsers);
console.log("Données utilisateurs non rangées", MyUsers);
console.log("Données utilisateurs rangées", result1);
console.log("Adultes", result2);

console.log("Nom du fichier :", __filename);
console.log("Nom du dossier :", __dirname);
