const express = require('express')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('health check');
});
app.get('/firestore', (req,res) => {
    
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})