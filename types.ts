type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  role: string;
};

type Restaurant = {
  restaurantId: number;
  name: string;
  email: string;
  contact: string;
  cuisine: string;
  image: string | undefined;
  description: string;
  status: string;
  address: string;
};

type Menu = {
  id: number;
  restaurantId: number;
  name: string;
};

type Food = {
  foodId: number;
  menuId: number;
  name: string;
  category: string;
  price: number;
};

type Order = {
  id: number;
  userId: number;
  restaurantId: number;
  transactionId: number;
  partnerId: number;
  orderItems: [OrderItem];
  totalPrice: number;
  notes: string;
  cancellationReason: string;
};

type OrderItem = {
  id: number;
  orderId: number;
  food: Food;
  quantity: number;
  price: number;
  totalPrice: number;
  notes: string;
};

type UserDetails = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  email_verified_at: null | string;
  contact: null | string;
  image: null | string;
  role: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

type PaginatedUsersData = {
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  page: number;
  first: boolean;
  last: boolean;
  size: number;
  content: User[];
  number: number;
  empty: boolean;
  //   sort
  //   pageable
};

type PaginatedRestaurantsData = {
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  page: number;
  first: boolean;
  last: boolean;
  size: number;
  content: Restaurant[];
  number: number;
  empty: boolean;
  //   sort
  //   pageable
};

type PaginatedMenusData = {
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  page: number;
  first: boolean;
  last: boolean;
  size: number;
  content: Menu[];
  number: number;
  empty: boolean;
  //   sort
  //   pageable
};

type PaginatedFoodsData = {
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  page: number;
  first: boolean;
  last: boolean;
  size: number;
  content: Food[];
  number: number;
  empty: boolean;
  //   sort
  //   pageable
};

type PaginatedOrdersData = {
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  page: number;
  first: boolean;
  last: boolean;
  size: number;
  content: Order[];
  number: number;
  empty: boolean;
  //   sort
  //   pageable
};
