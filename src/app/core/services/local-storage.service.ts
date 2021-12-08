import { Injectable } from '@angular/core';
import { StorageKeyEnum } from '../enums';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    public get<T>(key: StorageKeyEnum): T {
        const data = localStorage.getItem(key);

        return (data) ? JSON.parse(data) : null;
    }

    public set(key: StorageKeyEnum, data: any): void {
        const value = JSON.stringify(data);

        localStorage.setItem(key, value);
    }

    public remove(key: StorageKeyEnum): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }
}
