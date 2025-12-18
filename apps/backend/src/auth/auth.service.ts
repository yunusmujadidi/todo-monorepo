import { SignUpDto } from './dto/sign-up.dto';
import { UsersService } from './../users/users.service';
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';

//
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // register
  // TODO: add prisma error handler on sign up
  async signUp(signUpDto: SignUpDto) {
    // check user from email exist
    const userEmail = await this.usersService.findByEmail(signUpDto.email);
    if (userEmail) throw new ConflictException('Email already exist');

    // hash password
    const hashPassword = await bcrypt.hash(signUpDto.password, 10);

    const user = await this.usersService.create(signUpDto, hashPassword);

    const { password, ...result } = user;
    // add jwt token?
    return result;
  }

  // TODO: add prisma error handler on sign in
  async signIn(signInDto: SignInDto) {
    // check user exist
    const user = await this.usersService.findByEmail(signInDto.email);
    if (!user) throw new UnauthorizedException('Email or password is wrong');

    //   check user password same
    const validPassword = await bcrypt.compare(
      signInDto.password,
      user.password,
    );
    if (!validPassword)
      throw new UnauthorizedException('Email or password is wrong');

    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
