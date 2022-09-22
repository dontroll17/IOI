import { JwtService } from "@nestjs/jwt";
import { getModelToken } from "@nestjs/mongoose";
import { Test } from "@nestjs/testing";
import { User } from "../user/model/user.schema";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";

describe('Appservice', () => {
    let service: AuthService;

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
            providers: [
                AuthService,
                JwtService,
                UserService,
                {
                    provide: getModelToken(User.name),
                    useValue: mock
                }
            ]
        }).compile();

        service = moduleRef.get<AuthService>(AuthService);
    });


    describe('test defined', () => {
        it('should be defined', () => {
            expect(service).toBeDefined();
        });
    })
});