import Id from "../../../shared/domain/value-object/id.value-object";
import UseCaseInterface from "../../../shared/usecase/use-case.interface";
import ProductGateway from "../../gateway/product.gateway";
import { Product } from "./../../domain/product.entity";
import { AddProductInputDto, AddProductOutputDto } from "./add-product.dto";

export default class AddProductUseCase implements UseCaseInterface {
  constructor(private _productRepositoruy: ProductGateway) {}
  async execute(input: AddProductInputDto): Promise<AddProductOutputDto> {
    const props = {
      id: new Id(input.id),
      name: input.name,
      description: input.description,
      purchasePrice: input.purchasePrice,
      stock: input.stock,
    };
    const product = new Product(props);
    this._productRepositoruy.add(product);

    return {
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  }
}
