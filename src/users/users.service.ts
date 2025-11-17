import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUseDto, UpdateUseDto } from './dto/create-use.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  // 查找所有用户
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }
  // 根据ID查找用户信息
  async find(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }
  // 创建用户
  async createUser(createUserDto: CreateUseDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    console.log('[ user ]', user);
    return await this.usersRepository.save(user);
  }
  // 更新用户信息
  async updateUser(updateUserDto: UpdateUseDto): Promise<User> {
    const user = await this.find(updateUserDto.id);
    if (!user) {
      throw new NotFoundException(`User with ID ${updateUserDto.id} not found`);
    }
    Object.assign(user, updateUserDto);
    return await this.usersRepository.save(user);
  }
}
