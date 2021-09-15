import { User } from 'src/users/entities/user.entity';
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
        () => User,
        user => user.posts,
        { onDelete: 'CASCADE' }
    )
    @JoinColumn()
    user: User;

    // JoinTable will create new pivote table
    @ManyToMany(
        () => User,
        (user) => user.posts
    )
    @JoinTable()
    users: User[];
}
