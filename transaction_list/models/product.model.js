module.exports = (sequelize, DataTypes) => {

	const Product = sequelize.define("Product", {
		id : {primaryKey : true, autoIncrement : false, type: DataTypes.INTEGER, allowNull : false },
		name: DataTypes.STRING,
		price: DataTypes.INTEGER,
		stock: DataTypes.INTEGER,
	});
	return Product;
};
