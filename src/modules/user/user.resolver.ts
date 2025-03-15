import { Args, Resolver, Query } from '@nestjs/graphql';
import { User } from '@/modules/user/user.entity';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  public getUserId(@Args('id') id: string) {
    return { id };
  }
}
