import "reflect-metadata";
import { Container } from "inversify";
import { IUsersService } from "@/users/IUsersService";
import UsersService from "@/users/users.service";
import { expect } from "chai";

describe("UsersService", () => {
    let container: Container;
    let usersService: IUsersService;

    beforeEach(() => {
        container = new Container();
        container.bind<IUsersService>(IUsersService).to(UsersService);
        usersService = container.get<IUsersService>(IUsersService);
    });

    describe("getUsers", () => {
        it("should return an array of users", async () => {
            const users = await usersService.getUsers();
            expect(users).to.be.an("array");
            expect(users.length).to.be.greaterThan(0);
        });
    });
});
