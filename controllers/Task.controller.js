
const createTask = (req, res) => {
    console.log(req.user);
    res.send('test')
} 

module.exports = { createTask }