import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local.auth,guard';

@Controller('auth')

export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('/signin')
    async signin(@Request() req) {
        return this.authService.login(req.user);
    };


    @Post('/verify_token')
    async verify_token(@Request() req) {
        const res = await this.authService.verify_token(req.body);
        return res
    }
}
