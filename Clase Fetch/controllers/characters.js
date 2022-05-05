const fetch = require('node-fetch');
const urlBase = 'https://rickandmortyapi.com/api';


const getAllCharacters = (req, res) => {

    fetch(`${urlBase}/character`)
    .then(response=> response.json())
    .then(data=> {
        res.render('charactersList',{
            data:data.results
        });
    })
    .catch(err=>console.log(err))

}


const getCharacterById = async (req,res)=>{

    const {id} = req.params


    try {
        const response = await fetch(`${urlBase}/character/${id}`);
        const character = await response.json();

        res.render('character',{character})


    } catch (error) {
        console.log(error)
    }

}


const searchRouter = (req,res)=>{


    // console.log(req.url)

    const {name} = req.query;



    fetch(`${urlBase}/character/?name=${name}`)
    .then(response=>response.json())
    .then(data=>console.log(data));



    res.render('search')
}





module.exports = {
    getAllCharacters,
    getCharacterById,
    searchRouter
}





