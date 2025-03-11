import { User } from "./user.interface";


export interface UserResponse {
    user: User;
    mensaje: string;
    codigo: number;
    status: string;
}