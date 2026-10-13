
const MyUsers = [
    {age : 25, name :"John", email : "John25@gmail.com"},
    {age : 22, name :"Joe", email : "Joe22@gmail.com"},
    {age : 27, name :"Smith", email : "Smith22@gmail.com"},
    {age : 12, name :"Dave", email : "Dave22@gmail.com"},
    {age : 15, name :"Joji", email : "Joji22@gmail.com"}
]


function formatUsers(users) {
    return users.map(user => ({
        name: user.name,
        age: user.age,
        email: user.email,
    }));
}

function GetAdults(users) {
    let adultes = users.filter(user => user.age >= 18);
    return adultes.map(user => ({
        name: user.name,
        age: user.age,
        email: user.email,
    }));
}

module.exports = {formatUsers, GetAdults, MyUsers};
