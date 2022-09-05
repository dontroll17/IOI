import { CacheInterceptor, Controller, Get, UseInterceptors } from "@nestjs/common";
import { AppService } from "./app.service";

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
    constructor(private appService: AppService) {}

    @Get()
    getTest(): object {
        return this.appService.getTest();
    }
}