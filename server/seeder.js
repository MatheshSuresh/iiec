import products from "./data/products.js";
import users from "./data/users.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";
import env from "dotenv";

env.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    // await User.deleteMany();
    

    // await Product.insertMany(products);

    // const createUser = await User.insertMany(users);
    const adminUser = await User.findById("612fed7279094e3cd015ce5a");

    const sampleProduct = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProduct);
    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
