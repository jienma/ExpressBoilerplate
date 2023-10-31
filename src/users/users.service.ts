import { IUsersService } from "@/users/IUsersService";
import { injectable } from "inversify";

@injectable()
class UsersService implements IUsersService {
    async getUsers() {
        return [{id: 1, name: "John Doe"},
                {id: 2, name: "Jane Doe"},
                {id: 3, name: "John Smith"},
                {id: 4, name: "Jane Smith"},
                {id: 5, name: "John Wayne"},
                {id: 6, name: "Jane Wayne"}];
    }
}

export default UsersService;