const mongoose = require('mongoose');

const uri = "mongodb+srv://stararcglobalsolutions_db_user:Q9uBUdr2d9kt6Y79@cluster0.btm7dgu.mongodb.net/stararcdb?retryWrites=true&w=majority&appName=Cluster0";

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String
}, { strict: false });

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

async function run() {
  await mongoose.connect(uri);
  const products = await Product.find({ name: /Motion/i });
  console.log(JSON.stringify(products, null, 2));
  await mongoose.disconnect();
}

run().catch(console.error);
