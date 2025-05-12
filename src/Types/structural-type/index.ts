type User = { username: string; password: string };
type IsUserOn = (user: User, value: User) => boolean;

const checkUser: IsUserOn = (user, value) => {
  return user.username === value.username && user.password === value.password;
};

const user1 = {
  username: "Davi",
  password: "123456",
};

const user2 = {
  username: "Davi",
  password: "123456",
};

const isOn = checkUser(user1, user2);
console.log(isOn);
