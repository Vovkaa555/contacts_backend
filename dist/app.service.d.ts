import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
export declare class AppService {
    private usersRepository;
    delete(id: number): void;
    hapus(id: number): void;
    constructor(usersRepository: Repository<User>);
    findall(): Promise<User[]>;
    create(createuser: any): Promise<any>;
}
