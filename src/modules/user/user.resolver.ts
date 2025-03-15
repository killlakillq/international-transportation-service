import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { User } from '@/modules/user/user.entity';
import { CreateUserInput } from '@/modules/user/input/create-user.input';
import { UserService } from '@/modules/user/user.service';

@Resolver(() => User)
export class UserResolver {
  public constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  public async create(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    return this.userService.create(createUserInput);
  }

  @Query(() => User)
  public async findById(@Args('id') id: string) {
    return this.userService.findById(id);
  }
}
