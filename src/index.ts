import 'reflect-metadata';
import { startServer } from './app';
import { sequelize } from './db';
import './jobs/updateCharactersCron';


const PORT = process.env.PORT ?? 3001;


async function main() {
    await sequelize.authenticate();
    console.log('DB authenticated');
    await sequelize.sync();
    console.log('DB synced');


    const server = await startServer();
    server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/graphql`));
}


main().catch(err => {
    console.error(err);
    process.exit(1);
});