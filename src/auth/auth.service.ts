import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        console.log(user);
        if (user && (await this.passwordsAreEqual(user.password, password))) {
            const { password, ...result }  = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username:user.username, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }


    private async passwordsAreEqual(
        hashedPassword: string,
        plainPassword: string
    ): Promise<boolean> {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
}
