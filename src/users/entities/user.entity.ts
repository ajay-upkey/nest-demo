import { Post } from 'src/posts/entities/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	// define relationship of (Post > user_id) - not actual column
	@OneToMany(
		() => Post,
		post => post.user
	)
	posts: Post[];

	// define relationship of (Like > user_id) - not actual column
	@ManyToMany(
		() => Post,
		(post) => post.users
	)
	postss: Post[];
}
