import { Inject, Injectable } from '@nestjs/common';
import { Message } from '@stepin/api-interfaces';

@Injectable()
export class AppService {

  constructor(@Inject('DATABASE_CONNECTION') private readonly connection) {
    console.log(this.connection);
  }
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
