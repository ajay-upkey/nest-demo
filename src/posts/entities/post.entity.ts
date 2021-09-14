import { UsersEntity } from './../../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    userId: number;

    // user_id
    @ManyToOne(
        () => UsersEntity,
        user => user.posts,
        { onDelete: 'CASCADE' }
    )
    @JoinColumn()
    user: UsersEntity;

    // JoinTable will create new pivote table
    @ManyToMany(
        () => UsersEntity,
        (user) => user.posts
    )
    @JoinTable()
    users: UsersEntity[];
}
