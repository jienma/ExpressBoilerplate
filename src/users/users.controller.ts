import { Request, Response, NextFunction } from "express";
import { controller, httpGet, response, request, next } from "inversify-express-utils";
import { IUsersService } from "./IUsersService";
import { inject } from "inversify";

@controller("/users")
class UsersController {
    constructor(@inject(IUsersService) private readonly _userService: IUsersService){}

    @httpGet("/")
    async index(@request() req: Request, @response() res: Response, @next() next: NextFunction){
        const users = await this._userService.getUsers();
        return res.status(200).json(users);
    }
}

export default UsersController;