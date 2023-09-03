import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/user.interface';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private jwtService : JwtService) {

    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.getExistingUser({email : email});
        if (!user) return null;
        const passwordValid = await bcrypt.compare(password, user.password)
        if (!user) {
            throw new NotAcceptableException('could not find the user');
        }

        if (user && passwordValid) {
            return user;
        }
        return null;
    }

    async login(user: IUser) {
        const payload = { email: user.email, sub: user._id };
        return {
            api_token: this.jwtService.sign(payload),
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            password: user.password,
            createdAt: user.createdAt
        };
        
    }

    async verify_token(user: any) {
        try {
            const data = await this.jwtService.verifyAsync(user.api_token);
            const res = await this.userService.getExistingUser({ email: data.email });
    
            return res;
        } catch (err) {
          
            return null;
        }
    }

}
