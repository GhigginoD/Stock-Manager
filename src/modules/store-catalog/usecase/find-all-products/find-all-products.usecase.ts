import UseCaseInterface from "../../../shared/usecase/use-case.interface";
import ProductGateway from "../../gateway/product.gateway";

export default class FindAllProductsUsecase implements UseCaseInterface {
  constructor(private _productRepositoruy: ProductGateway) {}

  async execute(): Promise<any> {
    const productsDB = await this._productRepositoruy.findAll();
    return {
      products: productsDB.map((product) => {
        return {
          id: product.id.id,
          name: product.name,
          description: product.description,
          salesPrice: product.salesPrice,
        };
      }),
    };
  }
}
