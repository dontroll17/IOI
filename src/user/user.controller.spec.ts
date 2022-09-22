import { getModelToken } from "@nestjs/mongoose";
import { Test } from "@nestjs/testing";
import {  User } from "./model/user.schema";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";


describe('Appservice', () => {
    let service: UserService;
    let controller: UserController;

    const mock = {
        find: () => {
            return { exec: jest.fn(() => {})}
        },
        findById: () => {
            return { exec: jest.fn(() => {})}
        },
        findOne: () => {
            return { exec: jest.fn(() => {})}
        },
        save: () => jest.fn(() => {}),
        findByIdAndDelete: () => {
            return { exec: jest.fn(() => {})}
        },
        findByIdAndUpdate: () => {
            return { exec: jest.fn(() => {})}
        }
    }

    beforeEach(async () => {

        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [UserController],
            providers: [
                UserService,
                {
                    provide: getModelToken(User.name),
                    useValue: mock
                }
            ]
        }).compile();

        service = moduleRef.get<UserService>(UserService);
        controller = moduleRef.get<UserController>(UserController);
    });


    describe('test defined', () => {
        it('should be defined create', () => {
            expect(controller.createUser).toBeDefined();
        });

        it('should be defined create', () => {
            expect(controller.getUsers).toBeDefined();
        });

        it('should be defined create', () => {
            expect(controller.createUser).toBeDefined();
        });

        it('should be defined create', () => {
            expect(controller.updateUser).toBeDefined();
        });

        it('should be defined create', () => {
            expect(controller.removeUser).toBeDefined();
        });
    })
});