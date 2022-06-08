var express = require('express');

const port = 5000 //TODO

const app = express()
app.get('/', (req, res) => {
    console.log('getting home')
    res.json({success : 'Welcome to out app'})
})


app.listen(port, () => {
    console.log('running on port ' + port + ' : http://localhost:' + port)
})
