export type BlogParam = {
  page?: number;
  limit?: number;
  sort?: string;
  q?: string | null;
};

export type BlogUser = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
};

// export type BlogApiResponse = {
//   data: Array<BlogUser>;
// };
