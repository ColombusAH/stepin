import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb://user:secretPassword@localhost:27017/stepin').catch(e => {
                console.error(e);
                throw e;
            }),
    },
];