export interface UserResponseInfo {
    name: {
        title: string;
        first: string;
        last: string;
    };

    dob: {
        date: string;
        age: number;
    };
}
