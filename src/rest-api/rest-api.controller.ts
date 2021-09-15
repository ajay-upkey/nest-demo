import { Controller, Get } from '@nestjs/common';
import { RestApiService } from './rest-api.service';

@Controller('rest-api')
export class RestApiController {
    constructor(private readonly restApiService: RestApiService) {}

    @Get()
    async jsonPlaceHolderApiPost() {
        return this.restApiService.jsonPlaceHolderApiPost();
    }
}
