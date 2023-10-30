import User from "@/users/User";

export interface IUsersService {
    getUsers: () => Promise<User[]>;
};

export const IUsersService = Symbol.for("IUsersService");