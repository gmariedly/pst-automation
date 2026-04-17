export interface User {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
}

export const adminUser: User = {
  firstName: 'John',
  lastName: 'Doe',
  role: 'admin',
  email: 'admin@practicesoftwaretesting.com',
  password: 'welcome01',
};

export const customerUser: User = {
  firstName: 'Jane',
  lastName: 'Doe',
  role: 'customer',
  email: 'customer@practicesoftwaretesting.com',
  password: 'welcome01',
};

export const customerUser2: User = {
  firstName: 'Jack',
  lastName: 'Howe',
  role: 'customer',
  email: 'customer2@practicesoftwaretesting.com',
  password: 'welcome01',
};

export const customerUser3: User = {
  firstName: 'Bob',
  lastName: 'Smith',
  role: 'customer',
  email: 'customer3@practicesoftwaretesting.com',
  password: 'pass123',
};

export const invalidUser: User = {
  firstName: '',
  lastName: '',
  role: '',
  email: 'invalid@test.com',
  password: 'wrongpassword',
};

  export interface NewUser {
    firstName: string;
    lastName: string;
    dateBirth: string;
    street: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    phone: string;
    email: string;
    password: string;
}

export const newUser: NewUser = {
    firstName: 'Harry',
    lastName: 'Potter',
    dateBirth: '1993-08-24',
    street: 'Avalos',
    postalCode: '1431',
    city: 'Ciudad Autónoma Buenos Aires',
    state: 'Buenos Aires',
    country: 'Argentina',
    phone: '1166758923',
    email: `harrypotter+${Date.now()}${Math.random().toString(36).slice(2)}@test.com`,
    password: `Test${Date.now()}@Pw!`
}

