import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Exclude } from 'class-transformer';

@Entity({ name: "users" })
class User {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @Exclude()
  @Column()
  password: string;

  @Column({ name: 'created_at' })
  @CreateDateColumn()
  createdAt: Date;

  @Column({ name: 'updated_at' })
  @UpdateDateColumn()
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { User };