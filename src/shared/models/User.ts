import { role } from "./Role"

export class userModel{
    id:number
    userName:string
    userFName:string
    userLName:string
    email:string
    password:string
    role:role[]
}