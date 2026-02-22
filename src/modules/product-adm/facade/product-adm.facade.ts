import UseCaseInterface from "../../shared/usecase/use-case.interface";
import {
  AddProductFacadeInputDto,
  CheckStockFacadeInputDto,
  CheckStockFacadeOutputDto,
} from "./product-adm.facade.dto";
import ProductAdmFacadeInterface from "./product-adm.facade.interface";

export default class ProductAdmFacade implements ProductAdmFacadeInterface {
  constructor(
    private addUseCase: UseCaseInterface,
    private checkStockUseCase: UseCaseInterface,
  ) {}

  async addProduct(input: AddProductFacadeInputDto): Promise<void> {
    return this.addUseCase.execute(input);
  }
  checkStock(
    productId: CheckStockFacadeInputDto,
  ): Promise<CheckStockFacadeOutputDto> {
    return this.checkStockUseCase.execute(productId);
  }
}
