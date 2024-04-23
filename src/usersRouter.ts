import express, { Request, Response } from 'express';
import * as UserController from './controllers/usercontroller';
import { User } from './models/usermodel';

const router = express.Router();

// GET route to fetch the placeholder user
router.get('/', (req: Request, res: Response) => {
  const user: User = UserController.getUser();
  res.json(user);
});

// PUT route to update the placeholder user
router.put('/', (req: Request, res: Response) => {
  const { username, email } = req.body;
  const updatedUser: User = UserController.updateUser(username, email);
  res.json(updatedUser);
});

export default router;
