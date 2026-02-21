export interface AddProductFacadeInputDto {
  id?: string;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
}

export interface CheckStockInputDto {
  productId: string;
}
export interface CheckStockOutputDto {
  stock: number;
}
