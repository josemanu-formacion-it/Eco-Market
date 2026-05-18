import { Request, Response } from 'express';
import authService from '../services/authService';

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      
      if (!result) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }
      
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error en el inicio de sesión' });
    }
  }
}

export default new AuthController();
