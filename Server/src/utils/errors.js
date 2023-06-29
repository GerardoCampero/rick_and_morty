module.exports = (res, error) => {
    const { response } = error
    console.log(response.data.error)
    if(response && error.response.status === 404){
        res.status(error.response.status).send('Character Not Found')
    }else{
        res.status(500).send(error.message)
    }
}