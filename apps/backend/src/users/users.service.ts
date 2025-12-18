import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

// TODO: make auth guard protection
// TODO: make auth service, controller, module, and jwt strategiew

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

  // create user
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: createUserDto,
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
