import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { User } from '@/modules/user/entities/user.entity';
import { CreateUserInput } from '@/modules/user/dto/create-user.input';
import { UserService } from '@/modules/user/user.service';

@Resolver(() => User)
export class UserResolver {
  public constructor(private readonly userService: UserService) {}

  @Mutation(() => User, { name: 'createUser' })
  public async create(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    return this.userService.create(createUserInput);
  }

  @Query(() => User, { name: 'findUsers' })
  public async findById(@Args('id') id: string) {
    return this.userService.findById(id);
  }
}
