import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "apivendas",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [
      "/src/shared/typeorm/migration/.ts"
    ],
    cli: {
      "migrationsDir": "/src/shared/typeorm/migration"
    },
    subscribers: [],
})
