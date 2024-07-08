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

type Restaurant = {
  restaurantId: number;
  name: string;
  email: string;
  contact: number;
  cuisine: string;
};
