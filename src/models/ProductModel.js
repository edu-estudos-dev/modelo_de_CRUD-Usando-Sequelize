import { DataTypes, Model } from "sequelize";
import connection from '../database/connection.js';

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'Product',
    tableName: 'products',
  },
);

export default Product;
