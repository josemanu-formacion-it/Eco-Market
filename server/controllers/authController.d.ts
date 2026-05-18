import { type Request, type Response } from 'express';
declare class AuthController {
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
declare const _default: AuthController;
export default _default;
//# sourceMappingURL=authController.d.ts.map