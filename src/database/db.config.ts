
import mysql from 'mysql2/promise'
import 'dotenv/config'

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    connectionLimit: 10
})

export default async function query(sql: string, params: any[]) {

    try{
        const con = await pool.getConnection()

        const result = await con.execute(sql, params)
        con.release()
        return result

    } catch(error: any){
        console.log(error.message)
        return null
    }

} 