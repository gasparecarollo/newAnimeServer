const db = require("../db/dbConfig");

const getAllAnimes = async () => {
    try {
        const animes = await db.any("SELECT * FROM animes");
        return animes;
    } catch (error) {
        return error;
    }
}


modeule.exports = {
    getAllAnimes
}