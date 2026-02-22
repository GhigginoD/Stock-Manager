import {
  AddProductFacadeInputDto,
  CheckStockFacadeInputDto,
  CheckStockFacadeOutputDto,
} from "./product-adm.facade.dto";

export default interface ProductAdmFacadeInterface {
  addProduct(input: AddProductFacadeInputDto): Promise<void>;
  checkStock(
    productId: CheckStockFacadeInputDto,
  ): Promise<CheckStockFacadeOutputDto>;
}
