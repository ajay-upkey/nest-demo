import { RestApiController } from './rest-api.controller';
import { HttpModule, Module } from '@nestjs/common';
import { RestApiService } from './rest-api.service';

@Module({
  imports: [HttpModule],
  providers: [RestApiService],
  controllers: [RestApiController]
})
export class RestApiModule {}
