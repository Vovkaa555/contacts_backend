import { Controller, Get, Body, Param, Post, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import {userDTO} from './DTO/user.dto'

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private appservice:AppService) {}
  
  @Get()
  finddata() {
    return this.appservice.findall()
  }

  @Post("/post")
  createpost(@Body()createuser:userDTO) {
    return this.appservice.create(createuser)
  }

}
