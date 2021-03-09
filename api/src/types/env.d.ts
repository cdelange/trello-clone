// Added to have autocompletion and good validation
//changes the ambient defs of theprocess object
declare namespace NodeJS {
  export interface ProcessEnv {
    DB_HOST: string;
    DB_PORT: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    JWT_SECRET: string;
    PORT: string;
  }
}
