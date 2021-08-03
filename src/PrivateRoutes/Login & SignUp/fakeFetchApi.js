//  Database
const Users = [
  {
    username: "chandana",
    password: "smile",
  },
  {
    username: "laugh",
    password: "live",
  },
  {
    username: "happy",
    password: "smilee",
  },
];

const findUserByUsername = (username) => {
  return Users.find((user) => user.username === username);
};

export const fakeFetchApi = (username, password) => {
  return new Promise((resolve, reject) => {
    // is done on server
    // Server calls the db to get this data
    // and then return based on DBs resut
    setTimeout(() => {
      const user = findUserByUsername(username);
      if (user.password === password) {
        resolve({ success: true, status: 200 });
      }
      reject({ success: false, status: 401 });
    }, 3000);
  });
};
