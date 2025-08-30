import cron from "node-cron";
import axios from "axios";
import Character from "../models/character";

cron.schedule("0 */12 * * *", async () => {
  try {
    console.log("Cron: updating characters from Rick and Morty API");
    const resp = await axios.get(
      "https://rickandmortyapi.com/api/character?page=1"
    );
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
    console.log("Cron: update complete");
  } catch (e) {
    console.error("Cron error", e);
  }
});
