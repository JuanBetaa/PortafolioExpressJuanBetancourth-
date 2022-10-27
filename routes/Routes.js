const express = require('express')
const router = express.Router();
const app = express()
const port = 3000


router.get('/', (req, res) => {
   res.render('indexcu')
 })

 router.get('/habilidades', (req, res) => {
    res.render('Habilidades')
  })

router.get('/edu', (req, res) => {
   res.render('Logros')
})

module.exports=router;