import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Guitars {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  shape: string;

  @Column()
  material: string;

  @Column()
  finish: string;

  @Column()
  colour: string;

  @Column()
  numberofstrings: number;
}
