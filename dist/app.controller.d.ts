import type { Request, Response } from 'express';
export declare class AppController {
    setCookie(res: Response): Response<any, Record<string, any>>;
    getCookie(req: Request): {
        cookie: any;
    };
    clearCookie(res: Response): Response<any, Record<string, any>>;
    setSession(req: any): {
        message: string;
    };
    getSession(req: any): {
        username: any;
    };
    destroySession(req: any): {
        message: string;
    };
}
