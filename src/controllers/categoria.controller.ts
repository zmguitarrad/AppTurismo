import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../database';

export const getTouristAttraction =async(req:Request,res:Response): Promise<Response> =>{
    try {
        const response: QueryResult = await pool.query('SELECT * FROM cat_turistica');
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server error');    
    }  
}


export const createTouristAttraction = async(req:Request, res:Response): Promise<Response> =>{
    const { ctg_id, ctg_nombre_general }=req.body;
    const response: QueryResult = await pool.query(
        'INSERT INTO cat_turistica (ctg_id, ctg_nombre_general) VALUES ($1,$2)',
        [ctg_id, ctg_nombre_general]);

   return res.json({
        message: 'TouristAttractio created Successfuly',
        body: {
            USUARIO:{
                ctg_id, 
                ctg_nombre_general
            }
        }
    })      
}


