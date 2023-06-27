const axios = require('axios');


const getCharById = (req, res) => {
    const { id } = req.params;
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        const { id, name, status, species, gender, origin, image } = response.data;
        if (name) {
            const character = {
                id,
                name, 
                status, 
                species, 
                gender, 
                origin, 
                image
                }
            return res.status(200).json(character);
        } 
        
        return res.status(404).send('Not Found');

    })
    .catch((error) => {
        res.status(500).send(error.message);
    })
};

module.exports = {
    getCharById
}