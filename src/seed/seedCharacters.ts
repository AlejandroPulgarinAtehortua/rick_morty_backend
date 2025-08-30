import axios from 'axios';
import Character from '../models/character';
import { sequelize } from '../db';


async function seed() {
    await sequelize.authenticate();
    console.log('DB connected for seeding');

    const resp = await axios.get('https://rickandmortyapi.com/api/character?page=1');
    const results = resp.data.results.slice(0, 15);

    for (const r of results) {
    await Character.upsert({
        rmId: r.id,
        name: r.name,
        status: r.status,
        species: r.species,
        type: r.type,
        gender: r.gender,
        origin: r.origin?.name || null,
        image: r.image,
        });
    }
    console.log('Seed complete');
    process.exit(0);
}


seed().catch(err => {
console.error(err);
process.exit(1);
});