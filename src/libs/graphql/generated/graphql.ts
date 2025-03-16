import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: Date; output: Date; }
};

export type Calculation = {
  readonly __typename?: 'Calculation';
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['output'];
};

export type CreateCalculationInput = {
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['input'];
};

export type CreateDeliveryInput = {
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['input'];
};

export type CreateDocumentInput = {
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['input'];
};

export type CreateInventoryInput = {
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['input'];
};

export type CreateNotificationInput = {
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['input'];
};

export type CreateOrderInput = {
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['input'];
};

export type CreatePaymentInput = {
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['input'];
};

export type CreateRateInput = {
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['input'];
};

export type CreateRouteInput = {
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['input'];
};

export type CreateShipmentInput = {
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['input'];
};

export type CreateTicketInput = {
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['input'];
};

export type CreateUserInput = {
  readonly email: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
};

export type CreateVehicleInput = {
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['input'];
};

export type Delivery = {
  readonly __typename?: 'Delivery';
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['output'];
};

export type Document = {
  readonly __typename?: 'Document';
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['output'];
};

export type Inventory = {
  readonly __typename?: 'Inventory';
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['output'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createCalculation: Calculation;
  readonly createDelivery: Delivery;
  readonly createDocument: Document;
  readonly createInventory: Inventory;
  readonly createNotification: Notification;
  readonly createOrder: Order;
  readonly createPayment: Payment;
  readonly createRate: Rate;
  readonly createRoute: Route;
  readonly createShipment: Shipment;
  readonly createTicket: Ticket;
  readonly createUser: User;
  readonly createVehicle: Vehicle;
  readonly removeCalculation: Calculation;
  readonly removeDelivery: Delivery;
  readonly removeDocument: Document;
  readonly removeInventory: Inventory;
  readonly removeNotification: Notification;
  readonly removeOrder: Order;
  readonly removePayment: Payment;
  readonly removeRate: Rate;
  readonly removeRoute: Route;
  readonly removeShipment: Shipment;
  readonly removeTicket: Ticket;
  readonly removeVehicle: Vehicle;
  readonly updateCalculation: Calculation;
  readonly updateDelivery: Delivery;
  readonly updateDocument: Document;
  readonly updateInventory: Inventory;
  readonly updateNotification: Notification;
  readonly updateOrder: Order;
  readonly updatePayment: Payment;
  readonly updateRate: Rate;
  readonly updateRoute: Route;
  readonly updateShipment: Shipment;
  readonly updateTicket: Ticket;
  readonly updateVehicle: Vehicle;
};


export type MutationCreateCalculationArgs = {
  createCalculationInput: CreateCalculationInput;
};


export type MutationCreateDeliveryArgs = {
  createDeliveryInput: CreateDeliveryInput;
};


export type MutationCreateDocumentArgs = {
  createDocumentInput: CreateDocumentInput;
};


export type MutationCreateInventoryArgs = {
  createInventoryInput: CreateInventoryInput;
};


export type MutationCreateNotificationArgs = {
  createNotificationInput: CreateNotificationInput;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreatePaymentArgs = {
  createPaymentInput: CreatePaymentInput;
};


export type MutationCreateRateArgs = {
  createRateInput: CreateRateInput;
};


export type MutationCreateRouteArgs = {
  createRouteInput: CreateRouteInput;
};


export type MutationCreateShipmentArgs = {
  createShipmentInput: CreateShipmentInput;
};


export type MutationCreateTicketArgs = {
  createTicketInput: CreateTicketInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateVehicleArgs = {
  createVehicleInput: CreateVehicleInput;
};


export type MutationRemoveCalculationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveDeliveryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveInventoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveNotificationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveOrderArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePaymentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveRateArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveRouteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveShipmentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTicketArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveVehicleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateCalculationArgs = {
  updateCalculationInput: UpdateCalculationInput;
};


export type MutationUpdateDeliveryArgs = {
  updateDeliveryInput: UpdateDeliveryInput;
};


export type MutationUpdateDocumentArgs = {
  updateDocumentInput: UpdateDocumentInput;
};


export type MutationUpdateInventoryArgs = {
  updateInventoryInput: UpdateInventoryInput;
};


export type MutationUpdateNotificationArgs = {
  updateNotificationInput: UpdateNotificationInput;
};


export type MutationUpdateOrderArgs = {
  updateOrderInput: UpdateOrderInput;
};


export type MutationUpdatePaymentArgs = {
  updatePaymentInput: UpdatePaymentInput;
};


export type MutationUpdateRateArgs = {
  updateRateInput: UpdateRateInput;
};


export type MutationUpdateRouteArgs = {
  updateRouteInput: UpdateRouteInput;
};


export type MutationUpdateShipmentArgs = {
  updateShipmentInput: UpdateShipmentInput;
};


export type MutationUpdateTicketArgs = {
  updateTicketInput: UpdateTicketInput;
};


export type MutationUpdateVehicleArgs = {
  updateVehicleInput: UpdateVehicleInput;
};

export type Notification = {
  readonly __typename?: 'Notification';
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['output'];
};

export type Order = {
  readonly __typename?: 'Order';
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['output'];
};

export type Payment = {
  readonly __typename?: 'Payment';
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['output'];
};

export type Query = {
  readonly __typename?: 'Query';
  readonly calculation: Calculation;
  readonly delivery: Delivery;
  readonly document: Document;
  readonly findById: User;
  readonly inventory: Inventory;
  readonly notification: Notification;
  readonly order: Order;
  readonly payment: Payment;
  readonly rate: Rate;
  readonly route: Route;
  readonly shipment: Shipment;
  readonly ticket: Ticket;
  readonly vehicle: Vehicle;
};


export type QueryCalculationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDeliveryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryInventoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryNotificationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPaymentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRouteArgs = {
  id: Scalars['Int']['input'];
};


export type QueryShipmentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTicketArgs = {
  id: Scalars['Int']['input'];
};


export type QueryVehicleArgs = {
  id: Scalars['Int']['input'];
};

export type Rate = {
  readonly __typename?: 'Rate';
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['output'];
};

export type Route = {
  readonly __typename?: 'Route';
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['output'];
};

export type Shipment = {
  readonly __typename?: 'Shipment';
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['output'];
};

export type Ticket = {
  readonly __typename?: 'Ticket';
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['output'];
};

export type UpdateCalculationInput = {
  /** Example field (placeholder) */
  readonly exampleField?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['Int']['input'];
};

export type UpdateDeliveryInput = {
  /** Example field (placeholder) */
  readonly exampleField?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['Int']['input'];
};

export type UpdateDocumentInput = {
  /** Example field (placeholder) */
  readonly exampleField?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['Int']['input'];
};

export type UpdateInventoryInput = {
  /** Example field (placeholder) */
  readonly exampleField?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['Int']['input'];
};

export type UpdateNotificationInput = {
  /** Example field (placeholder) */
  readonly exampleField?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['Int']['input'];
};

export type UpdateOrderInput = {
  /** Example field (placeholder) */
  readonly exampleField?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['Int']['input'];
};

export type UpdatePaymentInput = {
  /** Example field (placeholder) */
  readonly exampleField?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['Int']['input'];
};

export type UpdateRateInput = {
  /** Example field (placeholder) */
  readonly exampleField?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['Int']['input'];
};

export type UpdateRouteInput = {
  /** Example field (placeholder) */
  readonly exampleField?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['Int']['input'];
};

export type UpdateShipmentInput = {
  /** Example field (placeholder) */
  readonly exampleField?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['Int']['input'];
};

export type UpdateTicketInput = {
  /** Example field (placeholder) */
  readonly exampleField?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['Int']['input'];
};

export type UpdateVehicleInput = {
  /** Example field (placeholder) */
  readonly exampleField?: InputMaybe<Scalars['Int']['input']>;
  readonly id: Scalars['Int']['input'];
};

export type User = {
  readonly __typename?: 'User';
  readonly createdDate?: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly password: Scalars['String']['output'];
  readonly updatedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type Vehicle = {
  readonly __typename?: 'Vehicle';
  /** Example field (placeholder) */
  readonly exampleField: Scalars['Int']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Calculation: ResolverTypeWrapper<Calculation>;
  CreateCalculationInput: CreateCalculationInput;
  CreateDeliveryInput: CreateDeliveryInput;
  CreateDocumentInput: CreateDocumentInput;
  CreateInventoryInput: CreateInventoryInput;
  CreateNotificationInput: CreateNotificationInput;
  CreateOrderInput: CreateOrderInput;
  CreatePaymentInput: CreatePaymentInput;
  CreateRateInput: CreateRateInput;
  CreateRouteInput: CreateRouteInput;
  CreateShipmentInput: CreateShipmentInput;
  CreateTicketInput: CreateTicketInput;
  CreateUserInput: CreateUserInput;
  CreateVehicleInput: CreateVehicleInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Delivery: ResolverTypeWrapper<Delivery>;
  Document: ResolverTypeWrapper<Document>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Inventory: ResolverTypeWrapper<Inventory>;
  Mutation: ResolverTypeWrapper<{}>;
  Notification: ResolverTypeWrapper<Notification>;
  Order: ResolverTypeWrapper<Order>;
  Payment: ResolverTypeWrapper<Payment>;
  Query: ResolverTypeWrapper<{}>;
  Rate: ResolverTypeWrapper<Rate>;
  Route: ResolverTypeWrapper<Route>;
  Shipment: ResolverTypeWrapper<Shipment>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Ticket: ResolverTypeWrapper<Ticket>;
  UpdateCalculationInput: UpdateCalculationInput;
  UpdateDeliveryInput: UpdateDeliveryInput;
  UpdateDocumentInput: UpdateDocumentInput;
  UpdateInventoryInput: UpdateInventoryInput;
  UpdateNotificationInput: UpdateNotificationInput;
  UpdateOrderInput: UpdateOrderInput;
  UpdatePaymentInput: UpdatePaymentInput;
  UpdateRateInput: UpdateRateInput;
  UpdateRouteInput: UpdateRouteInput;
  UpdateShipmentInput: UpdateShipmentInput;
  UpdateTicketInput: UpdateTicketInput;
  UpdateVehicleInput: UpdateVehicleInput;
  User: ResolverTypeWrapper<User>;
  Vehicle: ResolverTypeWrapper<Vehicle>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Calculation: Calculation;
  CreateCalculationInput: CreateCalculationInput;
  CreateDeliveryInput: CreateDeliveryInput;
  CreateDocumentInput: CreateDocumentInput;
  CreateInventoryInput: CreateInventoryInput;
  CreateNotificationInput: CreateNotificationInput;
  CreateOrderInput: CreateOrderInput;
  CreatePaymentInput: CreatePaymentInput;
  CreateRateInput: CreateRateInput;
  CreateRouteInput: CreateRouteInput;
  CreateShipmentInput: CreateShipmentInput;
  CreateTicketInput: CreateTicketInput;
  CreateUserInput: CreateUserInput;
  CreateVehicleInput: CreateVehicleInput;
  DateTime: Scalars['DateTime']['output'];
  Delivery: Delivery;
  Document: Document;
  Int: Scalars['Int']['output'];
  Inventory: Inventory;
  Mutation: {};
  Notification: Notification;
  Order: Order;
  Payment: Payment;
  Query: {};
  Rate: Rate;
  Route: Route;
  Shipment: Shipment;
  String: Scalars['String']['output'];
  Ticket: Ticket;
  UpdateCalculationInput: UpdateCalculationInput;
  UpdateDeliveryInput: UpdateDeliveryInput;
  UpdateDocumentInput: UpdateDocumentInput;
  UpdateInventoryInput: UpdateInventoryInput;
  UpdateNotificationInput: UpdateNotificationInput;
  UpdateOrderInput: UpdateOrderInput;
  UpdatePaymentInput: UpdatePaymentInput;
  UpdateRateInput: UpdateRateInput;
  UpdateRouteInput: UpdateRouteInput;
  UpdateShipmentInput: UpdateShipmentInput;
  UpdateTicketInput: UpdateTicketInput;
  UpdateVehicleInput: UpdateVehicleInput;
  User: User;
  Vehicle: Vehicle;
};

export type CalculationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Calculation'] = ResolversParentTypes['Calculation']> = {
  exampleField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Delivery'] = ResolversParentTypes['Delivery']> = {
  exampleField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']> = {
  exampleField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Inventory'] = ResolversParentTypes['Inventory']> = {
  exampleField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCalculation?: Resolver<ResolversTypes['Calculation'], ParentType, ContextType, RequireFields<MutationCreateCalculationArgs, 'createCalculationInput'>>;
  createDelivery?: Resolver<ResolversTypes['Delivery'], ParentType, ContextType, RequireFields<MutationCreateDeliveryArgs, 'createDeliveryInput'>>;
  createDocument?: Resolver<ResolversTypes['Document'], ParentType, ContextType, RequireFields<MutationCreateDocumentArgs, 'createDocumentInput'>>;
  createInventory?: Resolver<ResolversTypes['Inventory'], ParentType, ContextType, RequireFields<MutationCreateInventoryArgs, 'createInventoryInput'>>;
  createNotification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationCreateNotificationArgs, 'createNotificationInput'>>;
  createOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'createOrderInput'>>;
  createPayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationCreatePaymentArgs, 'createPaymentInput'>>;
  createRate?: Resolver<ResolversTypes['Rate'], ParentType, ContextType, RequireFields<MutationCreateRateArgs, 'createRateInput'>>;
  createRoute?: Resolver<ResolversTypes['Route'], ParentType, ContextType, RequireFields<MutationCreateRouteArgs, 'createRouteInput'>>;
  createShipment?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<MutationCreateShipmentArgs, 'createShipmentInput'>>;
  createTicket?: Resolver<ResolversTypes['Ticket'], ParentType, ContextType, RequireFields<MutationCreateTicketArgs, 'createTicketInput'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'createUserInput'>>;
  createVehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType, RequireFields<MutationCreateVehicleArgs, 'createVehicleInput'>>;
  removeCalculation?: Resolver<ResolversTypes['Calculation'], ParentType, ContextType, RequireFields<MutationRemoveCalculationArgs, 'id'>>;
  removeDelivery?: Resolver<ResolversTypes['Delivery'], ParentType, ContextType, RequireFields<MutationRemoveDeliveryArgs, 'id'>>;
  removeDocument?: Resolver<ResolversTypes['Document'], ParentType, ContextType, RequireFields<MutationRemoveDocumentArgs, 'id'>>;
  removeInventory?: Resolver<ResolversTypes['Inventory'], ParentType, ContextType, RequireFields<MutationRemoveInventoryArgs, 'id'>>;
  removeNotification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationRemoveNotificationArgs, 'id'>>;
  removeOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationRemoveOrderArgs, 'id'>>;
  removePayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationRemovePaymentArgs, 'id'>>;
  removeRate?: Resolver<ResolversTypes['Rate'], ParentType, ContextType, RequireFields<MutationRemoveRateArgs, 'id'>>;
  removeRoute?: Resolver<ResolversTypes['Route'], ParentType, ContextType, RequireFields<MutationRemoveRouteArgs, 'id'>>;
  removeShipment?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<MutationRemoveShipmentArgs, 'id'>>;
  removeTicket?: Resolver<ResolversTypes['Ticket'], ParentType, ContextType, RequireFields<MutationRemoveTicketArgs, 'id'>>;
  removeVehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType, RequireFields<MutationRemoveVehicleArgs, 'id'>>;
  updateCalculation?: Resolver<ResolversTypes['Calculation'], ParentType, ContextType, RequireFields<MutationUpdateCalculationArgs, 'updateCalculationInput'>>;
  updateDelivery?: Resolver<ResolversTypes['Delivery'], ParentType, ContextType, RequireFields<MutationUpdateDeliveryArgs, 'updateDeliveryInput'>>;
  updateDocument?: Resolver<ResolversTypes['Document'], ParentType, ContextType, RequireFields<MutationUpdateDocumentArgs, 'updateDocumentInput'>>;
  updateInventory?: Resolver<ResolversTypes['Inventory'], ParentType, ContextType, RequireFields<MutationUpdateInventoryArgs, 'updateInventoryInput'>>;
  updateNotification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationUpdateNotificationArgs, 'updateNotificationInput'>>;
  updateOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, 'updateOrderInput'>>;
  updatePayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationUpdatePaymentArgs, 'updatePaymentInput'>>;
  updateRate?: Resolver<ResolversTypes['Rate'], ParentType, ContextType, RequireFields<MutationUpdateRateArgs, 'updateRateInput'>>;
  updateRoute?: Resolver<ResolversTypes['Route'], ParentType, ContextType, RequireFields<MutationUpdateRouteArgs, 'updateRouteInput'>>;
  updateShipment?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<MutationUpdateShipmentArgs, 'updateShipmentInput'>>;
  updateTicket?: Resolver<ResolversTypes['Ticket'], ParentType, ContextType, RequireFields<MutationUpdateTicketArgs, 'updateTicketInput'>>;
  updateVehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType, RequireFields<MutationUpdateVehicleArgs, 'updateVehicleInput'>>;
};

export type NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  exampleField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  exampleField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = {
  exampleField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  calculation?: Resolver<ResolversTypes['Calculation'], ParentType, ContextType, RequireFields<QueryCalculationArgs, 'id'>>;
  delivery?: Resolver<ResolversTypes['Delivery'], ParentType, ContextType, RequireFields<QueryDeliveryArgs, 'id'>>;
  document?: Resolver<ResolversTypes['Document'], ParentType, ContextType, RequireFields<QueryDocumentArgs, 'id'>>;
  findById?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryFindByIdArgs, 'id'>>;
  inventory?: Resolver<ResolversTypes['Inventory'], ParentType, ContextType, RequireFields<QueryInventoryArgs, 'id'>>;
  notification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<QueryNotificationArgs, 'id'>>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  payment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<QueryPaymentArgs, 'id'>>;
  rate?: Resolver<ResolversTypes['Rate'], ParentType, ContextType, RequireFields<QueryRateArgs, 'id'>>;
  route?: Resolver<ResolversTypes['Route'], ParentType, ContextType, RequireFields<QueryRouteArgs, 'id'>>;
  shipment?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<QueryShipmentArgs, 'id'>>;
  ticket?: Resolver<ResolversTypes['Ticket'], ParentType, ContextType, RequireFields<QueryTicketArgs, 'id'>>;
  vehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType, RequireFields<QueryVehicleArgs, 'id'>>;
};

export type RateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rate'] = ResolversParentTypes['Rate']> = {
  exampleField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RouteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Route'] = ResolversParentTypes['Route']> = {
  exampleField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shipment'] = ResolversParentTypes['Shipment']> = {
  exampleField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ticket'] = ResolversParentTypes['Ticket']> = {
  exampleField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehicleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = {
  exampleField?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Calculation?: CalculationResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Delivery?: DeliveryResolvers<ContextType>;
  Document?: DocumentResolvers<ContextType>;
  Inventory?: InventoryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rate?: RateResolvers<ContextType>;
  Route?: RouteResolvers<ContextType>;
  Shipment?: ShipmentResolvers<ContextType>;
  Ticket?: TicketResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Vehicle?: VehicleResolvers<ContextType>;
};

