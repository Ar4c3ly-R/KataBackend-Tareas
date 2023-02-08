const registrarUser = (req, res) => {
    res.json({message: 'Registrar usuario'})
}

const loginUser = (req, res) => {
    res.json({message: 'Login usuario'})
}

const dataUser = (req, res) => {
    res.json({message: 'Data usuario'})
}

module.exports = {
    registrarUser,
    loginUser,
    dataUser
}