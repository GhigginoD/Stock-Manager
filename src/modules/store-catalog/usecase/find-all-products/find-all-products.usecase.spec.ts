import Id from "../../../shared/domain/value-object/id.value-object";
import Product from "../../domain/product.entity";
import FindAllProductsUsecase from "./find-all-products.usecase";

const product = new Product({
  id: new Id("1"),
  name: "product 1",
  description: "product description 1",
  salesPrice: 100,
});
const product2 = new Product({
  id: new Id("2"),
  name: "product 2",
  description: "product description 2",
  salesPrice: 200,
});

const MockProductRepository = () => {
  return {
    findAll: jest.fn().mockResolvedValue(Promise.resolve([product, product2])),
    find: jest.fn(),
  };
};
describe("Find all products usecase unit test", () => {
  it("should find all products", async () => {
    const productRepositoty = MockProductRepository();
    const usecase = new FindAllProductsUsecase(productRepositoty);
    const results = await usecase.execute();

    expect(results.products.length).toBe(2);
    expect(results.products[0].id).toBe("1");
    expect(results.products[0].name).toBe("product 1");
    expect(results.products[0].description).toBe("product description 1");
    expect(results.products[0].salesPrice).toBe(100);

    expect(results.products[1].id).toBe("2");
    expect(results.products[1].name).toBe("product 2");
    expect(results.products[1].description).toBe("product description 2");
    expect(results.products[1].salesPrice).toBe(200);
  });
});
