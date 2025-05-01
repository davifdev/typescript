type VerifyUser = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const userIsLog: VerifyUser = (user, sentValue) => {
  return (
    user.password === sentValue.password && user.username === sentValue.username
  );
};

const primaryUser = {
  username: "Davi",
  password: "123456",
};

const secondUser = {
  username: "Davi",
  password: "123456",
};

const isLog = userIsLog(primaryUser, secondUser);

if (isLog) {
  console.log("Usuário Logado!");
} else {
  console.log("Usuário deslogado");
}
