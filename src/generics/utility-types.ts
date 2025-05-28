// Record
const object1: Record<string, string | number> = {
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
};

// console.log(object1);

type PersonProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
};

// Required
type PersonRequired = Required<PersonProtocol>;

const person1: PersonRequired = {
  name: "Robson  ",
  lastName: "Costa",
  age: 28,
};

// console.log(person1);

// Partial
type PersonPartial = Partial<PersonRequired>;

const person2: PersonPartial = {
  name: "Thalita",
  lastName: "Silva",
  age: 26,
};

// console.log(person2);

// Readonly
type PersonReadonly = Readonly<PersonRequired>;

const person3: PersonReadonly = {
  name: "Clarice",
  lastName: "Falcão",
  age: 36,
};

// console.log(person3);

// Pick
type PersonPick = Pick<PersonRequired, "name" | "lastName">;

const person4: PersonPick = {
  name: "Yuri",
  lastName: "Alberto",
};

// console.log(person4);

// Extract e Exclude
type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";

type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  name: string;
  lastName: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: "daasff258f8d5has2d",
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

export default 1;
