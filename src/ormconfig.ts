import { ConnectionOptions } from 'typeorm';
import { join } from 'path';

const connectionOptions: ConnectionOptions = {
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