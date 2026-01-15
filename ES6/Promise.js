

function getUsers() {
  return [
    { username: 'john', email: 'john@test.com' },
    { username: 'jane', email: 'jane@test.com' },
  ];
}

function findUser(username) {
  const users = getUsers(); 
  const user = users.find((user) => user.username === username);
  return user;
}

console.log(findUser('john'));






function getUsers2() {
  let users = [];
  setTimeout(() => {
    users = [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
  }, 1000);
  return users;
}

function findUser2(username) {
  const users = getUsers2(); // A
  const user = users.find((user) => user.username === username); // B
  return user;
}

console.log(findUser2('john'));




function getUsers3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  });
}

function findUser3(username) {
  return getUsers3().then(users => {
    return users.find(user => user.username === username);
  });
}

/* 
    Returns Promise

    .then() ensures you wait for the data

    .find() runs after 1 second, when data exists
*/

findUser3('john').then(user => {
  console.log(user);
});

