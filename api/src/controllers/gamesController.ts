import { Request, Response } from "express";

import db from '../connection_db';

class GamesController {
    public async index(req: Request, res: Response): Promise<void> {
        try{
            const games = await db.query('select * from games');
            res.json(games);
        }catch(err){
            console.log(err)
        }
    }   

    public async create(req: Request, res: Response): Promise<void> {
        try{
            await db.query('insert into games set ?', [req.body])
            res.json({ text: `the game has been created!`});
        }catch(err){
            console.log(err)
        }
    }

    public async update(req: Request, res: Response): Promise<void>{
        try{
            const { id } = req.params;
            await db.query('update games set ? where id = ?', [req.body]);
            res.json({ text: `the game with id ${req.params.id} has been updated!`});
        }catch(err){
            console.log(err)
        }
    }

    public async delete(req: Request, res: Response): Promise<void>{
        try{
            const { id } = req.params.id;
            await db.query('delete from games where id = ?', [id]);
            res.json({ text: `the game with id ${req.params.id} has been deleted! `})
        }catch(err){
            console.log(err)
        }
        
    }

    public async getGameById(req: Request, res: Response): Promise<any> {
        try{
            const { id } = req.params;
            const games = await db.query('select * from games where id = ?', [id]);
            if(games.length > 0){
                return res.json(games[0]);
            }else{
                res.status(404).json({text: "the game doesn't exists"});
            }
        }catch(err){
            console.log(err)
        }
    }

}

export const gamesController = new GamesController();