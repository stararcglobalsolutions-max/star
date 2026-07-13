const mongoose = require('mongoose');

const uri = 'mongodb+srv://stararcglobalsolutions_db_user:Q9uBUdr2d9kt6Y79@cluster0.btm7dgu.mongodb.net/stararcdb?retryWrites=true&w=majority&appName=Cluster0';

const ProductSchema = new mongoose.Schema({
  name: String,
  keyFeatures: [{ icon: String, text: String }]
}, { strict: false });

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

async function run() {
  await mongoose.connect(uri);
  
  const allProducts = await Product.find({});
  const targetSlug = 'hub-8in';
  
  const product = allProducts.find(p => {
    if (!p.name) return false;
    const pSlug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return pSlug === targetSlug;
  });
  
  if (product) {
    product.keyFeatures = [
      { icon: 'RefreshCw', text: 'Free software updates' },
      { icon: 'MessageSquare', text: 'Informing users with push notifications, calls, and SMS' },
      { icon: 'Bell', text: 'Connection to security company CMS' },
      { icon: 'Wifi', text: 'Communication with wireless Ajax devices at a distance of up to 2,000 m' },
      { icon: 'AlertTriangle', text: 'Tampering alarm' },
      { icon: 'Activity', text: 'Frequency hopping' },
      { icon: 'Smartphone', text: 'Remote control and setup via the app' },
      { icon: 'QrCode', text: 'Connecting to Ajax apps via QR code' }
    ];
    await product.save();
    console.log('Product updated successfully!');
  } else {
    console.log('Product not found.');
    console.log('Available products:', allProducts.map(p => p.name));
  }
  
  await mongoose.disconnect();
}

run().catch(console.error);
