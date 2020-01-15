const Dev = require('../models/Dev');

module.exports = {

    async index(req, res, next) {
        let { latitude, longitude, techs } = req.query;

        techs = techs.split(',').map(tech => tech.trim());
        console.log(techs);

        const devs = await Dev.find({
            techs: {
                $in: techs
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [
                            longitude,
                            latitude
                        ],
                    },
                    $maxDistance: 10000
                }
            }
        });

        res.json({ devs });
    }

}