import { Container } from 'inversify';
import { IUsersService } from '@/users/IUsersService';
import UsersService from '@/users/users.service';
import { buildProviderModule } from 'inversify-binding-decorators';
import { UsersController } from '@/users/users.controller';

// Our own container, so we can initialize it and tweak protected variables
export class InitializedContainer extends Container {
    constructor() {
        super();
    }

    init() {
        /** Add Bindings here! */
        this.bind<IUsersService>(IUsersService).to(UsersService).inSingletonScope();
        this.bind<UsersController>(UsersController).toSelf().inSingletonScope();
    }
}

// Create a new container tsoa can use
const iocContainer = new InitializedContainer();

// make inversify aware of inversify-binding-decorators
iocContainer.load(buildProviderModule());

export { iocContainer };