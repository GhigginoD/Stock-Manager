import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "products",
})
export class ProductModel extends Model<ProductModel> {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  declare id: string;

  @Column(DataType.STRING)
  declare name: string;

  @Column(DataType.STRING)
  declare description: string;

  @Column(DataType.FLOAT)
  declare purchasePrice: number;

  @Column(DataType.INTEGER)
  declare stock: number;

  @Column(DataType.DATE)
  declare createdAt: Date;

  @Column(DataType.DATE)
  declare updatedAt: Date;
}
