export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface User {
    id: string;
    email: string;
    password?: string;
    name: string;
}
export interface AuthResponse {
    token: string;
    user: Omit<User, 'password'>;
}
//# sourceMappingURL=index.d.ts.map