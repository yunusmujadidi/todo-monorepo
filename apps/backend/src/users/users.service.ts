import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

// TODO: make auth guard protection
// TODO: make auth service, controller, module, and jwt strategiew
// TODO: add prisma error handler

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // findAll
  async findAll() {
    return await this.prisma.user.findMany();
  }

  // find by id
  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  // find by email for login
  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  // create user
  async create(createUserDto: CreateUserDto, hashPassword: string) {
    return await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashPassword,
      },
    });
  }

  // update user
  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  // delete user
  async delete(id: string) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
