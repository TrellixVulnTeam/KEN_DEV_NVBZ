import * as mysql from 'mysql2';
import database_Function from './nutrientmap/queries_nutrientmap'
import 'dotenv/config';





const mysqlAccess = mysql.createPool({
    host:process.env.DB_HOST,
    port:Number(process.env.DB_PORT),
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DATABASE
})

export const Query = (query:string,values?:Array<string|number>)=>{
    return new Promise<Array<any>>((resolve,reject)=>{
        mysqlAccess.query(query,values,(err,results:any) =>{
            if(err) return reject(err)
            return resolve(results);
        })
    })
};

export default database_Function;