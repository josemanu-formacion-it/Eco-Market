import { type AuthResponse } from '../types/index.js';
declare class AuthService {
    private users;
    login(email: string, password: string): Promise<AuthResponse | null>;
}
declare const _default: AuthService;
export default _default;
//# sourceMappingURL=authService.d.ts.map