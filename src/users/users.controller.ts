import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUseDto, UpdateUseDto } from './dto/create-use.dto';
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/list')
  @ApiOperation({ summary: '获取全部用户' })
  @ApiOkResponse({ description: '返回用户列表' })
  async findAll() {
    return await this.usersService.findAll();
  }
  @Post('/create')
  @ApiOperation({ summary: '创建用户' })
  @ApiOkResponse({ description: '返回创建的用户' })
  async createUser(@Body() user: CreateUseDto) {
    console.log('[ user ]', user);
    return await this.usersService.createUser(user);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取单个用户' })
  @ApiOkResponse({ description: '返回查找到的用户' })
  async findOneUser(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.find(id);
  }

  @Post('/update')
  @ApiOperation({ summary: '更新当前用户' })
  @ApiOkResponse({ description: '返回更新状态' })
  async updateUser(@Body() userInfo: UpdateUseDto) {
    return await this.usersService.updateUser(userInfo);
  }
}
