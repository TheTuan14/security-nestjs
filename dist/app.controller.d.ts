import type { Request, Response } from 'express';
export declare class AppController {
    setCookie(res: Response): Response<any, Record<string, any>>;
    getCookie(req: Request): {
        cookie: any;
    };
    clearCookie(res: Response): Response<any, Record<string, any>>;
}
