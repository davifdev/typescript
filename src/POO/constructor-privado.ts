export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private name: string,
    private password: string
  ) {}

  connect(): void {
    console.log(`Conectado na porta ${this.host} ${this.name}
      ${this.password}`);
  }

  static getDatabase(host: string, name: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, name, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase("localhost:3000", "admin", "admin123");
const db2 = Database.getDatabase("localhost:3000", "admin", "admin123");

console.log(db1);
console.log(db2);
console.log(db1 === db2);
