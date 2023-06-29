const axios = require('axios');
const errorHandler = require('../utils/errors');


const getCharById = async (req, res) => {
    const { id } = req.params;

    
    try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

        const { name, status, species, gender, origin, image } = data;
        const character = { id, name, status, species, gender, origin, image };

        res.status(200).json(character);
    } catch (error) {
        errorHandler(res, error)
    }
    
    // axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    // .then((response) => {
    //     const { id, name, status, species, gender, origin, image } = response.data;
    //     if (name) {
    //         const character = {
    //             id,
    //             name, 
    //             status, 
    //             species, 
    //             gender, 
    //             origin, 
    //             image
    //             }
    //         return res.status(200).json(character);
    //     } 
        
    //     return res.status(404).send('Not Found');

    // })
    // .catch((error) => {
    //     res.status(500).send(error.message);
    // })
};

module.exports = {
    getCharById
}