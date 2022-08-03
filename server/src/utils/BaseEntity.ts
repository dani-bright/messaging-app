import {
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: moment.Moment;

  @UpdateDateColumn()
  updatedAt: moment.Moment;

  constructor(entity?: Record<string, any>) {
    Object.assign(this, entity);
  }

  protected convertToNumeric?(value: string | number): number | null {
    // Meh, we may need more precision, but this day isn't today
    return value ? parseFloat(value as any) : (value as number | null);
  }
}
