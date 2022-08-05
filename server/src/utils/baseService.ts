import { DeepPartial, Repository } from 'typeorm';

import { NotFoundException } from '@nestjs/common';

export abstract class BaseService<T> {
  constructor(protected repository: Repository<T>) {}

  sanitizeTextSearchInput(text: string | null | undefined): string {
    return text ? text.replace(/-{2,}|;|'/g, ' ').trim() : '';
  }

  async getOne(id: number, relations: string[] = []): Promise<T> {
    const entity = await this.repository.findOne({
      where: { id } as any,
      relations: [...new Set([...relations])],
    });

    if (!entity) {
      throw new NotFoundException();
    }

    return entity;
  }

  async insert(data: DeepPartial<T>): Promise<T> {
    const entity = await this.repository.save(data);

    return entity;
  }

  async remove(entity: T): Promise<T> {
    await this.repository.remove(entity);

    return entity;
  }

  async getAll(
    where: any = {},
    relations: string[] = [],
    skip = 0,
    order: any = {},
  ): Promise<T[]> {
    return this.repository.find({
      where,
      order,
      skip,
      relations: relations,
    });
  }
}
