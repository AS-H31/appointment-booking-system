"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  address.init(
    {
      addressId: DataTypes.UUID,
      street: DataTypes.STRING,
      house_number: DataTypes.STRING,
      zip_code: DataTypes.STRING,
      city: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "address",
    },
  );
  return address;
};
