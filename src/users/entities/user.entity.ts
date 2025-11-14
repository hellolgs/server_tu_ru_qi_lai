// 用户实体

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('userList')
export class User {
  // ID 自增主键
  @PrimaryGeneratedColumn()
  id: number;

  // 昵称
  @Column({ length: 50 })
  name: string;

  // 等级
  @Column()
  level: number;

  // 当前体力
  @Column()
  currentEnergy: number;

  // 最大体力
  @Column()
  maxEnergy: number;

  // 上次体力恢复时间
  @Column()
  lastRestoreTime: number;

  // 当前的通关级数
  @Column()
  currentLevel: string;
}
