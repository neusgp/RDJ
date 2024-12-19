declare namespace NodeJS {
    export interface ProcessEnv {
        HOST: string;
        DB_USER: string;
        DB_NAME: string;
        PASSWORD: string;
        HOST_LOCAL: string;
        DB_USER_LOCAL: string;
        DB_NAME_LOCAL: string;
        PASSWORD_LOCAL: string;
        PORT: number; 
    }
}

