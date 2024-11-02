export interface Item {
  id: string;
  name: string;
  price: number;
  description?: string; //?は任意だから
  status: 'ON_SALE' | 'SOLD_OUT';
}
