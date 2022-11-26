import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Guitars {
  @PrimaryColumn()
  id: string;

  @Column()
  value: string;
}
