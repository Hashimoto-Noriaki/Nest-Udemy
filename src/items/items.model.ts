export interface Items {
  id: string;
  name: string;
  price: number;
  description?: string; //?は任意だから
  sttaus: 'ON_SALE' | 'SOLD_OUT';
}
