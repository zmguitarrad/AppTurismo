import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../database';

export const getHistory =async(req:Request,res:Response): Promise<Response> =>{
    try {
        const response: QueryResult = await pool.query('SELECT * FROM historia');
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server error');    
    }  
}


export const createHistory = async(req:Request, res:Response): Promise<Response> =>{
    const { id_param, param_descripcion}=req.body;
    const response: QueryResult = await pool.query(
        'INSERT INTO historia (id_param, param_descripcion) VALUES ($1,$2)',
        [id_param, param_descripcion]);
   return res.json({
        message: 'History created Successfuly',
        body: {
            USUARIO:{
                id_param, 
                param_descripcion
            }
        }
    })      
}


