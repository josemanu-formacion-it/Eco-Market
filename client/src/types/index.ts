export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ApiError {
  message: string;
}
