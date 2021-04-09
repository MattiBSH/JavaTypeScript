import auth from 'basic-auth'
import compare from 'tsscmp'

import { Request, Response } from "express"
import facade from "../facades/DummyDB-Facade"

const authMiddleware = async function (req: Request, res: Response, next: Function) {
  
}

export default authMiddleware;
