import * as express from 'express'
import * as cors from 'cors'
import Nutrientmap from './db/nutrientmap'
import * as fetch from 'isomorphic-fetch'
import * as path from 'path'
import bodyParser from 'body-parser'
import { PullRequestOutlined } from '@ant-design/icons'
import 'dotenv/config'

const app = express()
app.use(Nutrientmap)
app.use(express.static('public'));
app.use(cors())
app.use(express.json())
app.set('trust proxy', true)

// app.post('/post', async (req,res) =>{
//     let firstdata= req.body[0]

//     const data = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${firstdata}&pageSize=11&api_key=tz8FikxFkSfY7V5vpSChMeqgxthoR9ILcvLtA0Ya`)
//     const item = await data.json()

//     item.foods[0].foodNutrients.map((i:any)=>{console.log(i)})

//     res.send(item)
// })

const newUse = app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

app.post('/get', (req, res, error) => {
  // const data = await fetch(
  //   `https://api.nal.usda.gov/fdc/v1/foods/search?query=${"McDONALD'S, Double Cheeseburger"}&pageSize=11&api_key=${
  //     process.env.API_KEY
  //   }`
  // )
  // const newData = await data.json()
  // console.log(newData)
  // res.json(newData)
  // if (error) {
  //   console.log(error)
  // }
  console.log(req.body)
  res.json(req.body)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
