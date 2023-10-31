import { IUsersService } from "@/users/IUsersService";
import { inject, injectable } from "inversify";
import { Get, Route } from "@tsoa/runtime";

@Route("users")
@injectable()
export class UsersController {
    constructor(@inject(IUsersService) private readonly _userService: IUsersService) { }

    @Get("/")
    async index(){
        const users = await this._userService.getUsers();
        return users;
    }
}