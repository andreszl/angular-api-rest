import { Request, Response } from "express";

class IndexController {
    public index(req: Request, res: Response) {
        res.send("its works - IndexController");
    }   
}

export const indexController = new IndexController();