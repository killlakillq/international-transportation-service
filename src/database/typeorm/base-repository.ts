import {
  Repository,
  EntityTarget,
  DataSource,
  FindOptionsWhere,
} from 'typeorm';

export class BaseRepository<T> extends Repository<T> {
  public constructor(target: EntityTarget<T>, dataSource: DataSource) {
    super(target, dataSource.createEntityManager());
  }

  public async findById(id: string): Promise<T | null> {
    const options: FindOptionsWhere<T> = {
      id,
    } as unknown as FindOptionsWhere<T>;

    return this.findOneBy(options);
  }
}
