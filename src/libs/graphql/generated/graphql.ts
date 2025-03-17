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
  readonly calculatedAt: Scalars['DateTime']['output'];
  readonly cost: Scalars['Float']['output'];
  readonly distance: Scalars['Float']['output'];
  readonly id: Scalars['ID']['output'];
  readonly weight: Scalars['Float']['output'];
};

export type CreateCalculationInput = {
  readonly cost: Scalars['Float']['input'];
  readonly distance: Scalars['Float']['input'];
  readonly weight: Scalars['Float']['input'];
};

export type CreateDeliveryInput = {
  readonly status: DeliveryStatus;
};

export type CreateDocumentInput = {
  readonly fileName: Scalars['String']['input'];
  readonly fileType: Scalars['String']['input'];
  readonly url: Scalars['String']['input'];
};

export type CreateInventoryInput = {
  readonly location: Scalars['String']['input'];
  readonly productName: Scalars['String']['input'];
  readonly quantity: Scalars['Float']['input'];
  readonly weight: Scalars['Float']['input'];
};

export type CreateNotificationInput = {
  readonly message: Scalars['String']['input'];
};

export type CreateOrderInput = {
  readonly status: OrderStatus;
  readonly totalAmount: Scalars['Float']['input'];
};

export type CreatePaymentInput = {
  readonly amount: Scalars['Float']['input'];
  readonly paymentMethod: Scalars['String']['input'];
  readonly status: PaymentStatus;
};

export type CreateRateInput = {
  readonly basePrice: Scalars['Float']['input'];
  readonly pricePerKg: Scalars['Float']['input'];
};

export type CreateRouteInput = {
  readonly estimatedTime: Scalars['String']['input'];
  readonly from: Scalars['String']['input'];
  readonly to: Scalars['String']['input'];
};

export type CreateShipmentInput = {
  readonly status: ShipmentStatus;
  readonly trackingNumber: Scalars['String']['input'];
  readonly weight: Scalars['Float']['input'];
};

export type CreateTicketInput = {
  readonly issue: Scalars['String']['input'];
  readonly status: TicketStatus;
};

export type CreateUserInput = {
  readonly email: Scalars['String']['input'];
};

export type CreateVehicleInput = {
  readonly licensePlate: Scalars['String']['input'];
  readonly maxCapacity: Scalars['Float']['input'];
  readonly vehicleType: Scalars['String']['input'];
};

export type Delivery = {
  readonly __typename?: 'Delivery';
  readonly deliveredAt: Scalars['DateTime']['output'];
  readonly id: Scalars['ID']['output'];
  readonly route: Route;
  readonly shipment: Shipment;
  readonly status: DeliveryStatus;
  readonly vehicle: Vehicle;
};

/** The status of the delivery. */
export enum DeliveryStatus {
  Delivered = 'Delivered',
  Failed = 'Failed',
  InTransit = 'InTransit',
  Pending = 'Pending'
}

export type Document = {
  readonly __typename?: 'Document';
  readonly fileName: Scalars['String']['output'];
  readonly fileType: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly uploadedAt: Scalars['DateTime']['output'];
  readonly url: Scalars['String']['output'];
};

export type Inventory = {
  readonly __typename?: 'Inventory';
  readonly id: Scalars['ID']['output'];
  readonly location: Scalars['String']['output'];
  readonly productName: Scalars['String']['output'];
  readonly quantity: Scalars['Float']['output'];
  readonly weight: Scalars['Float']['output'];
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
  readonly deleteCalculation: Calculation;
  readonly deleteDelivery: Delivery;
  readonly deleteDocument: Document;
  readonly deleteInventory: Inventory;
  readonly deleteOrder: Order;
  readonly deletePayment: Payment;
  readonly deleteRate: Rate;
  readonly deleteRoute: Route;
  readonly deleteShipment: Shipment;
  readonly deleteTicket: Ticket;
  readonly deleteVehicle: Vehicle;
  readonly removeNotification: Notification;
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


export type MutationDeleteCalculationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDeliveryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDocumentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteInventoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePaymentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRateArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRouteArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteShipmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTicketArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteVehicleArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveNotificationArgs = {
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
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['ID']['output'];
  readonly message: Scalars['String']['output'];
  readonly status: NotificationStatus;
  readonly user: User;
};

/** The status of the notification. */
export enum NotificationStatus {
  Read = 'Read',
  Unread = 'Unread'
}

export type Order = {
  readonly __typename?: 'Order';
  readonly id: Scalars['ID']['output'];
  readonly orderDate: Scalars['DateTime']['output'];
  readonly status: OrderStatus;
  readonly totalAmount: Scalars['Float']['output'];
  readonly user: User;
};

/** The status of the order. */
export enum OrderStatus {
  Canceled = 'Canceled',
  Completed = 'Completed',
  Pending = 'Pending'
}

export type Payment = {
  readonly __typename?: 'Payment';
  readonly amount: Scalars['Float']['output'];
  readonly id: Scalars['ID']['output'];
  readonly paymentDate: Scalars['DateTime']['output'];
  readonly paymentMethod: Scalars['String']['output'];
  readonly shipment: Shipment;
  readonly status: PaymentStatus;
  readonly user: User;
};

/** The status of the payment. */
export enum PaymentStatus {
  Failed = 'Failed',
  Paid = 'Paid',
  Pending = 'Pending'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly findCalculationById: Calculation;
  readonly findCalculations: ReadonlyArray<Calculation>;
  readonly findDeliveries: ReadonlyArray<Delivery>;
  readonly findDeliveryById: Delivery;
  readonly findDocumentById: Document;
  readonly findDocuments: ReadonlyArray<Document>;
  readonly findInventoryById: Inventory;
  readonly findInventorys: ReadonlyArray<Inventory>;
  readonly findOrderById: Order;
  readonly findOrders: ReadonlyArray<Order>;
  readonly findPaymentById: Payment;
  readonly findPayments: ReadonlyArray<Payment>;
  readonly findRateById: Rate;
  readonly findRates: ReadonlyArray<Rate>;
  readonly findRouteById: Route;
  readonly findRoutes: ReadonlyArray<Route>;
  readonly findShipmentById: Shipment;
  readonly findShipments: ReadonlyArray<Shipment>;
  readonly findTicketById: Ticket;
  readonly findTickets: ReadonlyArray<Ticket>;
  readonly findUsers: User;
  readonly findVehicleById: Vehicle;
  readonly findVehicles: ReadonlyArray<Vehicle>;
  readonly notification: Notification;
};


export type QueryFindCalculationByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindDeliveryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindDocumentByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindInventoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindOrderByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindPaymentByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindRateByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindRouteByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindShipmentByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindTicketByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindUsersArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindVehicleByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryNotificationArgs = {
  id: Scalars['Int']['input'];
};

export type Rate = {
  readonly __typename?: 'Rate';
  readonly basePrice: Scalars['Float']['output'];
  readonly id: Scalars['ID']['output'];
  readonly pricePerKg: Scalars['Float']['output'];
  readonly route: Route;
};

export type Route = {
  readonly __typename?: 'Route';
  readonly deliveries: ReadonlyArray<Delivery>;
  readonly estimatedTime: Scalars['String']['output'];
  readonly from: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly to: Scalars['String']['output'];
};

export type Shipment = {
  readonly __typename?: 'Shipment';
  readonly id: Scalars['ID']['output'];
  readonly route: Route;
  readonly status: ShipmentStatus;
  readonly trackingNumber: Scalars['String']['output'];
  readonly user: User;
  readonly vehicle: Vehicle;
  readonly weight: Scalars['Float']['output'];
};

/** The status of the shipment. */
export enum ShipmentStatus {
  Canceled = 'Canceled',
  Delivered = 'Delivered',
  InTransit = 'InTransit',
  Pending = 'Pending',
  Shipped = 'Shipped'
}

export type Ticket = {
  readonly __typename?: 'Ticket';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly id: Scalars['ID']['output'];
  readonly issue: Scalars['String']['output'];
  readonly status: TicketStatus;
  readonly user: User;
};

/** The status of the ticket. */
export enum TicketStatus {
  Closed = 'Closed',
  InProgress = 'InProgress',
  Opened = 'Opened'
}

export type UpdateCalculationInput = {
  readonly cost?: InputMaybe<Scalars['Float']['input']>;
  readonly distance?: InputMaybe<Scalars['Float']['input']>;
  readonly id: Scalars['String']['input'];
  readonly weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateDeliveryInput = {
  readonly id: Scalars['String']['input'];
  readonly status?: InputMaybe<DeliveryStatus>;
};

export type UpdateDocumentInput = {
  readonly fileName?: InputMaybe<Scalars['String']['input']>;
  readonly fileType?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['String']['input'];
  readonly url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInventoryInput = {
  readonly id: Scalars['String']['input'];
  readonly location?: InputMaybe<Scalars['String']['input']>;
  readonly productName?: InputMaybe<Scalars['String']['input']>;
  readonly quantity?: InputMaybe<Scalars['Float']['input']>;
  readonly weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateNotificationInput = {
  readonly id: Scalars['String']['input'];
  readonly message?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderInput = {
  readonly id: Scalars['String']['input'];
  readonly status?: InputMaybe<OrderStatus>;
  readonly totalAmount?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdatePaymentInput = {
  readonly amount?: InputMaybe<Scalars['Float']['input']>;
  readonly id: Scalars['String']['input'];
  readonly paymentMethod?: InputMaybe<Scalars['String']['input']>;
  readonly status?: InputMaybe<PaymentStatus>;
};

export type UpdateRateInput = {
  readonly basePrice?: InputMaybe<Scalars['Float']['input']>;
  readonly id: Scalars['String']['input'];
  readonly pricePerKg?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateRouteInput = {
  readonly estimatedTime?: InputMaybe<Scalars['String']['input']>;
  readonly from?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['String']['input'];
  readonly to?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateShipmentInput = {
  readonly id: Scalars['String']['input'];
  readonly status?: InputMaybe<ShipmentStatus>;
  readonly trackingNumber?: InputMaybe<Scalars['String']['input']>;
  readonly weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateTicketInput = {
  readonly id: Scalars['String']['input'];
  readonly issue?: InputMaybe<Scalars['String']['input']>;
  readonly status?: InputMaybe<TicketStatus>;
};

export type UpdateVehicleInput = {
  readonly id: Scalars['String']['input'];
  readonly licensePlate?: InputMaybe<Scalars['String']['input']>;
  readonly maxCapacity?: InputMaybe<Scalars['Float']['input']>;
  readonly vehicleType?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  readonly __typename?: 'User';
  readonly createdAt: Scalars['DateTime']['output'];
  readonly email: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly orders: ReadonlyArray<Order>;
  readonly phone: Scalars['String']['output'];
  readonly role: Scalars['String']['output'];
  readonly shipments: ReadonlyArray<Shipment>;
};

export type Vehicle = {
  readonly __typename?: 'Vehicle';
  readonly driver: User;
  readonly id: Scalars['ID']['output'];
  readonly licensePlate: Scalars['String']['output'];
  readonly maxCapacity: Scalars['Float']['output'];
  readonly vehicleType: Scalars['String']['output'];
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
  DeliveryStatus: DeliveryStatus;
  Document: ResolverTypeWrapper<Document>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Inventory: ResolverTypeWrapper<Inventory>;
  Mutation: ResolverTypeWrapper<{}>;
  Notification: ResolverTypeWrapper<Notification>;
  NotificationStatus: NotificationStatus;
  Order: ResolverTypeWrapper<Order>;
  OrderStatus: OrderStatus;
  Payment: ResolverTypeWrapper<Payment>;
  PaymentStatus: PaymentStatus;
  Query: ResolverTypeWrapper<{}>;
  Rate: ResolverTypeWrapper<Rate>;
  Route: ResolverTypeWrapper<Route>;
  Shipment: ResolverTypeWrapper<Shipment>;
  ShipmentStatus: ShipmentStatus;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Ticket: ResolverTypeWrapper<Ticket>;
  TicketStatus: TicketStatus;
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
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
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
  calculatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  distance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeliveryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Delivery'] = ResolversParentTypes['Delivery']> = {
  deliveredAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  route?: Resolver<ResolversTypes['Route'], ParentType, ContextType>;
  shipment?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DeliveryStatus'], ParentType, ContextType>;
  vehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']> = {
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fileType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  uploadedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Inventory'] = ResolversParentTypes['Inventory']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
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
  deleteCalculation?: Resolver<ResolversTypes['Calculation'], ParentType, ContextType, RequireFields<MutationDeleteCalculationArgs, 'id'>>;
  deleteDelivery?: Resolver<ResolversTypes['Delivery'], ParentType, ContextType, RequireFields<MutationDeleteDeliveryArgs, 'id'>>;
  deleteDocument?: Resolver<ResolversTypes['Document'], ParentType, ContextType, RequireFields<MutationDeleteDocumentArgs, 'id'>>;
  deleteInventory?: Resolver<ResolversTypes['Inventory'], ParentType, ContextType, RequireFields<MutationDeleteInventoryArgs, 'id'>>;
  deleteOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationDeleteOrderArgs, 'id'>>;
  deletePayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationDeletePaymentArgs, 'id'>>;
  deleteRate?: Resolver<ResolversTypes['Rate'], ParentType, ContextType, RequireFields<MutationDeleteRateArgs, 'id'>>;
  deleteRoute?: Resolver<ResolversTypes['Route'], ParentType, ContextType, RequireFields<MutationDeleteRouteArgs, 'id'>>;
  deleteShipment?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<MutationDeleteShipmentArgs, 'id'>>;
  deleteTicket?: Resolver<ResolversTypes['Ticket'], ParentType, ContextType, RequireFields<MutationDeleteTicketArgs, 'id'>>;
  deleteVehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType, RequireFields<MutationDeleteVehicleArgs, 'id'>>;
  removeNotification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<MutationRemoveNotificationArgs, 'id'>>;
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
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['NotificationStatus'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  totalAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  paymentDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  paymentMethod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shipment?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PaymentStatus'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findCalculationById?: Resolver<ResolversTypes['Calculation'], ParentType, ContextType, RequireFields<QueryFindCalculationByIdArgs, 'id'>>;
  findCalculations?: Resolver<ReadonlyArray<ResolversTypes['Calculation']>, ParentType, ContextType>;
  findDeliveries?: Resolver<ReadonlyArray<ResolversTypes['Delivery']>, ParentType, ContextType>;
  findDeliveryById?: Resolver<ResolversTypes['Delivery'], ParentType, ContextType, RequireFields<QueryFindDeliveryByIdArgs, 'id'>>;
  findDocumentById?: Resolver<ResolversTypes['Document'], ParentType, ContextType, RequireFields<QueryFindDocumentByIdArgs, 'id'>>;
  findDocuments?: Resolver<ReadonlyArray<ResolversTypes['Document']>, ParentType, ContextType>;
  findInventoryById?: Resolver<ResolversTypes['Inventory'], ParentType, ContextType, RequireFields<QueryFindInventoryByIdArgs, 'id'>>;
  findInventorys?: Resolver<ReadonlyArray<ResolversTypes['Inventory']>, ParentType, ContextType>;
  findOrderById?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<QueryFindOrderByIdArgs, 'id'>>;
  findOrders?: Resolver<ReadonlyArray<ResolversTypes['Order']>, ParentType, ContextType>;
  findPaymentById?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<QueryFindPaymentByIdArgs, 'id'>>;
  findPayments?: Resolver<ReadonlyArray<ResolversTypes['Payment']>, ParentType, ContextType>;
  findRateById?: Resolver<ResolversTypes['Rate'], ParentType, ContextType, RequireFields<QueryFindRateByIdArgs, 'id'>>;
  findRates?: Resolver<ReadonlyArray<ResolversTypes['Rate']>, ParentType, ContextType>;
  findRouteById?: Resolver<ResolversTypes['Route'], ParentType, ContextType, RequireFields<QueryFindRouteByIdArgs, 'id'>>;
  findRoutes?: Resolver<ReadonlyArray<ResolversTypes['Route']>, ParentType, ContextType>;
  findShipmentById?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<QueryFindShipmentByIdArgs, 'id'>>;
  findShipments?: Resolver<ReadonlyArray<ResolversTypes['Shipment']>, ParentType, ContextType>;
  findTicketById?: Resolver<ResolversTypes['Ticket'], ParentType, ContextType, RequireFields<QueryFindTicketByIdArgs, 'id'>>;
  findTickets?: Resolver<ReadonlyArray<ResolversTypes['Ticket']>, ParentType, ContextType>;
  findUsers?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryFindUsersArgs, 'id'>>;
  findVehicleById?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType, RequireFields<QueryFindVehicleByIdArgs, 'id'>>;
  findVehicles?: Resolver<ReadonlyArray<ResolversTypes['Vehicle']>, ParentType, ContextType>;
  notification?: Resolver<ResolversTypes['Notification'], ParentType, ContextType, RequireFields<QueryNotificationArgs, 'id'>>;
};

export type RateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rate'] = ResolversParentTypes['Rate']> = {
  basePrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pricePerKg?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  route?: Resolver<ResolversTypes['Route'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RouteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Route'] = ResolversParentTypes['Route']> = {
  deliveries?: Resolver<ReadonlyArray<ResolversTypes['Delivery']>, ParentType, ContextType>;
  estimatedTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shipment'] = ResolversParentTypes['Shipment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  route?: Resolver<ResolversTypes['Route'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ShipmentStatus'], ParentType, ContextType>;
  trackingNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  vehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ticket'] = ResolversParentTypes['Ticket']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  issue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TicketStatus'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orders?: Resolver<ReadonlyArray<ResolversTypes['Order']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shipments?: Resolver<ReadonlyArray<ResolversTypes['Shipment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehicleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = {
  driver?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  licensePlate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxCapacity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  vehicleType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

