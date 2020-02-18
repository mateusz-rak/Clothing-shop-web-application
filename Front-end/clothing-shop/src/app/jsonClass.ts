export class Client {
  name?: string;
  surname?: string;
  sex?: string;
  address?: string;
  appUser: AppUser;
}

export class AppUser {
  username?: string;
  password?: string;
  role?: string;
}

export class Cloth {
  // tslint:disable-next-line:variable-name
  cloth_id: number;
  name: string;
  price: number;
  sex: Sex;
  size: Size;
  category: Category;
  color: Color;
  image: string;
}


export class ClothWithAllSize {
  // tslint:disable-next-line:variable-name
  name: string;
  price: number;
  sizes: Size[];
  color: Color;
  sex: Sex;
  category: Category;
  image: string;
}

export class Cart {
  // tslint:disable-next-line:variable-name
  cart_id: number;
  clothes: Cloth[];
}

export class Order {
  date: Date;
  price: number;
  typeOfPayment: Payment;
  clothes: Cloth[];
}

export class Color {
  name: string;
}

export class Payment {
  name: string;
}

export class Sex {
  name: string;
}

export class Size {
  name: string;
}

export class Size1 {
  size: Size;
  if: boolean;
}

export class Category {
  name: string;
}

