import { Container } from 'inversify';
import { IUsersService } from '@/users/IUsersService';
import UsersService from '@/users/users.service';

class IOCContainer extends Container {
    constructor() {
        super();
    }

    init() {
        this.bind<IUsersService>(IUsersService).to(UsersService);
    }
}

export default IOCContainer;