import { ConnectionOptions } from 'typeorm';
// import * as path from 'path';
import { join } from 'path';

const connectionOptions: ConnectionOptions = {
    // type: 'sqlite',
    // database: `${path.resolve(__dirname, '..')}/data/line.sqlite`,
    type: 'mysql',
    database: `nest-demo1`,
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: false,
    migrations: ['src/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};

export = connectionOptions;