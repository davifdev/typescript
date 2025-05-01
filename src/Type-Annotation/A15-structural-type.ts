type VerifyUser = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const UserIsOn: VerifyUser = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const user1 = {
  username: "Davi",
  password: "123456",
};

UserIsOn(user1, user1);
