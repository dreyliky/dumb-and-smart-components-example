import { UserResponseInfo } from './user-response-info.interface';

export interface UsersResponseInfo {
    results: UserResponseInfo[];

    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
}
