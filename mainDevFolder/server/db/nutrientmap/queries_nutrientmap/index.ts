import { Query } from "../../index";


const allMessages = async () => Query('SELECT * FROM Nutrientmap.lifestagereference');
// const singleChirp = async (id:string) => Query('SELECT * FROM Chirps WHERE id = ?',[id]);
const deleteMessages= async(id:string)=>Query('DELETE FROM contact WHERE id = ?',[id]);
const insertCLIENT = async(values :any )=>Query('INSERT INTO Nutrientmap.client SET ?' ,values);
const insertInstitution = async(values :any )=>Query('INSERT INTO Nutrientmap.institution SET ?' ,values);

const updateMessages = async (newContent:any,id:any) =>Query('UPDATE contact SET ? WHERE id = ?', [newContent,id])
// const allUsers = async () => Query('SELECT * FROM Users');
// const insertUsers = async(user :any )=>Query('INSERT INTO clients SET ?' ,[user]);
// const insertPhysical = async(physical :any,clientid:number )=>Query('INSERT INTO client_lifestyle SET ?' ,[physical]);





export default {
    allMessages,
    // singleChirp,
    deleteMessages,
    insertCLIENT,
    updateMessages,
    insertInstitution
    // allUsers,
    // insertUsers,
    // insertPhysical
    
}