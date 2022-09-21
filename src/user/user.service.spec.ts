import { getModelToken } from "@nestjs/mongoose";
import { Test } from "@nestjs/testing";
import { User } from "./model/user.schema";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";


describe('Appservice', () => {
    let service: UserService;

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
    });


    describe('test defined', () => {
        it('should be defined create', () => {
            expect(service.findOne).toBeDefined();
        });

        it('should be defined create', () => {
            expect(service.getUsers).toBeDefined();
        });

        it('should be defined create', () => {
            expect(service.createUser).toBeDefined();
        });

        it('should be defined create', () => {
            expect(service.getUserById).toBeDefined();
        });

        it('should be defined create', () => {
            expect(service.updateUser).toBeDefined();
        });

        it('should be defined create', () => {
            expect(service.removeUser).toBeDefined();
        });
    })
});