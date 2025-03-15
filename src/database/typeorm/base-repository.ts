import { Repository, EntityTarget, DataSource } from 'typeorm';

export class BaseRepository<T> extends Repository<T> {
  public constructor(target: EntityTarget<T>, dataSource: DataSource) {
    super(target, dataSource.createEntityManager());
  }
}
