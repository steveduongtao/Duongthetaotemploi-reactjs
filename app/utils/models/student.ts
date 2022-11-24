export interface Student {
  id?: string;
  name: string;
  age: string;
  mark: string;
  gender: 'male' | 'female';
  city: string;
  createAt?: number;
  updateAt?: number;
}
