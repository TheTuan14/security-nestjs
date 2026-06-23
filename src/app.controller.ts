import { Controller, Get, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller()
export class AppController {

  // ===== COOKIE =====
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

  // ===== SESSION =====
  @Get('session/set')
  setSession(@Req() req: any) {
    req.session.username = 'sinh_vien_abc';
    return { message: 'Session da set!' };
  }

  @Get('session/get')
  getSession(@Req() req: any) {
    return { username: req.session.username || 'Chua co session' };
  }

  @Get('session/destroy')
  destroySession(@Req() req: any) {
    req.session.destroy();
    return { message: 'Session da xoa!' };
  }
}