// Create web server
let express = require('express')
let bodyParser = require('body-parser')
let fs = require('fs')
let app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

// Get comments
app.get('/comments', function(req, res) {
    fs.readFile('comments.json', function(err, data) {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        let comments = JSON.parse(data)
        res.json(comments)
    })
})

// Add comments
app.post('/comments', function(req, res) {
    fs.readFile('comments.json', function(err, data) {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        let comments = JSON.parse(data)
        let newComment = {
            id: Date.now(),
