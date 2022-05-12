import * as express from 'express'
import database_Function from './queries_nutrientmap'

const app = express()

app.all('/nutrientmap/client', async (req, res, error) => {
  
  switch (req.method) {
    case 'GET':
      const new_Data = await database_Function.allMessages()
      new_Data.map(i => {
        console.log(i)
      });
      res.json(new_Data)
      
      break;
    case 'POST':
      console.log(req.body.values)
      await database_Function.insertCLIENT(req.body.values)
      res.json(req.body)
      break;

    case 'PUT':
      await database_Function.updateMessages(req.body, req.body.id)
      res.send(200)
      break;

    case 'DELETE':
      await database_Function.deleteMessages(req.body.id)
      res.send(req.method)
      break;

    default:

      res.send()
      break;
  }
})

app.all('/nutrientmap/institution/:id', async (req, res, error) => {
  switch (req.method) {
    case 'GET':
      const new_Data = await database_Function.allMessages()
      new_Data.map(i => {
        console.log(i)
      });
      res.json(new_Data)
      
      break;
    case 'POST':
      req.body.client_Id = req.params.id
      console.log(req.body)

      let {insertId}:any = await database_Function.insertInstitution(req.body)
      console.log(insertId)
      res.send(req.method)
      break;

    case 'PUT':
      await database_Function.updateMessages(req.body, req.body.id)
      res.send(200)
      break;

    case 'DELETE':
      await database_Function.deleteMessages(req.body.id)
      res.send(req.method)
      break;

    default:

      res.send()
      break;
  }
})

export default app
