import { IsEmail, IsNotEmpty } from 'class-validator';

export class UsersDTO {
	id: number;
	name: string;

	@IsEmail()
	email: string;

	@IsNotEmpty()
	password: string;
}
