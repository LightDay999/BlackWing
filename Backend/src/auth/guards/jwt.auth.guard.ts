import { Injectable, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable() 
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActive(context: ExecutionContext) {
        return super.canActivate(context);
    }
}