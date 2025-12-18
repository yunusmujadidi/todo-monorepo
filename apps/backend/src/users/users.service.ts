import { CreateUserDto } from './dto/create-user.dto';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  // find by email for login
  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  // create user
  async create(createUserDto: CreateUserDto, hashPassword: string) {
    try {
      return await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: hashPassword,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('User with this email already exist');
      }
      throw error;
    }
  }

  // update user
  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }

  // delete user
  async delete(id: string) {
    try {
      return await this.prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }
}
