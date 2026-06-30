const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dsizhtxet',
  api_key: '471711891197147',
  api_secret: 'NuC8y_f2bd1qxZ7HDgtG8_1Km54'
});

async function run() {
  try {
    console.log("Updating existing ml_default preset to allow all formats...");
    const update = await cloudinary.api.update_upload_preset('ml_default', {
      unsigned: true,
      folder: 'stararc_products',
      allowed_formats: ['jpg', 'png', 'jpeg', 'webp', 'avif', 'svg', 'gif']
    });
    console.log("SUCCESSFULLY UPDATED:", update);
  } catch (error) {
    console.error("ERROR UPDATING PRESET:", error);
  }
}

run();
