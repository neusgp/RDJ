declare namespace NodeJS {
    export interface ProcessEnv {
        HOST: string;
        DB_USER: string;
        DB_NAME: string;
        PASSWORD: string;
        PORT: number;
    }
}