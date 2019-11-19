const db = require('./conn.js');

class Boxer {
    constructor(id, name, bio, currentWeight, picture, video, trainer, promoter, country, fightingStyle, network, weightClass, beltNames) {
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.currentWeight = currentWeight;
        this.picture = picture;
        this.video = video;
        this.trainer = trainer;
        this.promoter = promoter;
        this.country = country;
        this.fightingStyle = fightingStyle;
        this.network = network;
        this.weightClass = weightClass;
        this.beltNames = beltNames
    }

    static async getAll() {
        try {
            const response = await db.any(`select * from Boxer;`);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    static async getById(id) {
        try {
            const response = await db.one(`SELECT * FROM Boxer WHERE id = $1;`, [id]);
            return response
        } catch (err) {
            return err.message
        }
    }
}

module.exports = Boxer;