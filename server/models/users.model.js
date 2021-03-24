import models from "./IndexModel";

const users = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    user_password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_type: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    user_salt: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });

 

  return users;

};

export default users;