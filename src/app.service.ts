import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class AppService {
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
  hapus(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

    findall(): Promise<User[]> {
      return this.usersRepository.find();
    }
    create(createuser:any) {
      return this.usersRepository.save(createuser);
    }

}
