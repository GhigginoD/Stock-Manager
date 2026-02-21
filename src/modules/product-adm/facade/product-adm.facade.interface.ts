import {
  AddProductFacadeInputDto,
  CheckStockInputDto,
  CheckStockOutputDto,
} from "./product-adm.facade.dto";

export default interface ProductAdmFacadeInterface {
  addProduct(input: AddProductFacadeInputDto): Promise<void>;
  checkStock(productId: CheckStockInputDto): Promise<CheckStockOutputDto>;
}
