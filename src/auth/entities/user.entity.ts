import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({ unique: true }) username: string;

  @Column() password: string;
}
