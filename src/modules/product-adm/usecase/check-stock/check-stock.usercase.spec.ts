import Id from "../../../shared/domain/value-object/id.value-object";
import { Product } from "../../domain/product.entity";
import CheckStockUseCase from "./check-stock.usercase";

const product = new Product({
  id: new Id("1"),
  name: "Product 1",
  description: "Product 1 description",
  purchasePrice: 100,
  stock: 10,
});
const MockProductRepository = () => {
  return {
    add: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
  };
};

describe("Check stock usercase unit test", () => {
  it("should return the product quantity in stock", async () => {
    const productRepository = MockProductRepository();
    const checkStockUsecase = new CheckStockUseCase(productRepository);

    const input = {
      productId: "1",
    };
    const result = await checkStockUsecase.execute(input);

    expect(productRepository.find).toHaveBeenCalled();
    expect(result.productId).toBe(input.productId);
    expect(result.stock).toBe(10);
  });
});
