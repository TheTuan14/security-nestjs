import { Controller, Get, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller()
export class AppController {

  @Get('cookie/set')
  setCookie(@Res() res: Response) {
    res.cookie('my_cookie', 'hello_cookie', {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.json({ message: 'Cookie da set!' });
  }

  @Get('cookie/get')
  getCookie(@Req() req: Request) {
    return { cookie: req.cookies['my_cookie'] };
  }

  @Get('cookie/clear')
  clearCookie(@Res() res: Response) {
    res.clearCookie('my_cookie');
    return res.json({ message: 'Cookie da xoa!' });
  }
}
