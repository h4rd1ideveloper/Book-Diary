import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() title: string;

  @Column() author: string;

  @Column('int') rating: number;

  @Column({ nullable: true }) notes?: string;
}
