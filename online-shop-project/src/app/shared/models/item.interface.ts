import { Seller } from './seller.interface';

export interface Item {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  seller: Seller;
  price: number;
  isPublic: boolean;
}
