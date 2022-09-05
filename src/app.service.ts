import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";

@Injectable()
export class AppService {
    constructor(
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache
    ) {}

    async getTest(): Promise<object> {
        await this.cacheManager.set('cached_object', { key: 32 }, { ttl: 10 });
        const cachedObject = await this.cacheManager.get('cached_object');
        console.log(cachedObject, 'Only once');
        await this.cacheManager.del('cached_object');
        
        return {
            message: 'This is test route',
            state: 'online'
        }
    }
}