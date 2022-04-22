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
app.use(express.static('public'))
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

let foodsArray:[];


app.post('/nutritionalData', async (req, res, error) => {
  const data = await fetch(
    `https://api.nal.usda.gov/fdc/v1/foods/search?query=${req.body.foodSelection}&pageSize=4&dataType=Foundation&api_key=${process.env.API_KEY}`
  )
  const foodsQuery = await data.json()

  const foodsArray = await foodsQuery.foods.map((i: any) => {
    return i
  })
  let arraySort = foodsArray[0].foodNutrients.sort((a: any, b: any) => {
    const nameA = a.nutrientName.toUpperCase() // ignore upper and lowercase
    const nameB = b.nutrientName.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })



  const nutrientProfile: [] = arraySort.map((data: any, index: number) => {
    if (
      data.nutrientId == 1003 ||
      data.nutrientId == 1005 ||
      data.nutrientId == 1079 ||
      data.nutrientId == 1109 ||
      data.nutrientId == 1114 ||
      data.nutrientId == 1162 ||
      data.nutrientId == 1090 ||
      data.nutrientId == 1087 ||
      data.nutrientId == 100

    ) {
      return data
    }
  })
  let selectedNutrients = nutrientProfile.filter(
    index => index !== undefined || null
  )

  res.json([foodsArray[0].description, selectedNutrients])

})


app.get('/test', async (req, res) => {
  
  
  // const data = await fetch(
  //   `https://api.nal.usda.gov/fdc/v1/foods/search?query=${`Hood`}&dataType=Branded&api_key=${process.env.API_KEY}`
  // )
  // const foodsQuery = await data.json()

  // const foodsArray = await foodsQuery.foods.map((i: any) => {
  //   return i
  // })
  

  res.sendStatus(200)

})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
