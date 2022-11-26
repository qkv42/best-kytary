import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Example {
  @PrimaryColumn()
  id: string;

  @Column()
  value: string;
}
