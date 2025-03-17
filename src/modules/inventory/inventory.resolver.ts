import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InventoryService } from '@/modules/inventory/inventory.service';
import { Inventory } from '@/modules/inventory/entities/inventory.entity';
import { CreateInventoryInput } from '@/modules/inventory/dto/create-inventory.input';
import { UpdateInventoryInput } from '@/modules/inventory/dto/update-inventory.input';

@Resolver(() => Inventory)
export class InventoryResolver {
  public constructor(private readonly inventoryService: InventoryService) {}

  @Mutation(() => Inventory, { name: 'createInventory' })
  public async create(
    @Args('createInventoryInput') createInventoryInput: CreateInventoryInput,
  ) {
    return this.inventoryService.create(createInventoryInput);
  }

  @Query(() => [Inventory], { name: 'findInventories' })
  public async find() {
    return this.inventoryService.find();
  }

  @Query(() => Inventory, { name: 'findInventoryById' })
  public async findById(@Args('id') id: string) {
    return this.inventoryService.findById(id);
  }

  @Mutation(() => Inventory, { name: 'updateInventory' })
  public async update(
    @Args('updateInventoryInput') updateInventoryInput: UpdateInventoryInput,
  ) {
    return this.inventoryService.update(
      updateInventoryInput.id,
      updateInventoryInput,
    );
  }

  @Mutation(() => Inventory, { name: 'deleteInventory' })
  public async delete(@Args('id') id: string) {
    return this.inventoryService.delete(id);
  }
}
