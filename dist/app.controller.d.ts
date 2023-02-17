import { AppService } from './app.service';
import { userDTO } from './DTO/user.dto';
export declare class AppController {
    private appservice;
    getHello(): any;
    constructor(appservice: AppService);
    finddata(): Promise<import("./entity/user.entity").User[]>;
    createpost(createuser: userDTO): Promise<any>;
}
