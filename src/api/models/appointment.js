"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  appointment.init(
    {
      appointmentId: DataTypes.UUID,
      appointment_date: DataTypes.DATE,
      appointment_time: DataTypes.TIME,
      addressId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "appointment",
    },
  );
  return appointment;
};
