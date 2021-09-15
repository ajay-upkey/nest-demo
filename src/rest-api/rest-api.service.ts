import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class RestApiService {
    constructor(private readonly httpService: HttpService) {}

    jsonPlaceHolderApiPost() {
        return this.httpService
            .get('https://jsonplaceholder.typicode.com/posts')
            .pipe(
                map((response) => response.data)
            );
    }
}
