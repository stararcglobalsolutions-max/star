const fs = require('fs');
const { PDFExtract } = require('pdf.js-extract');
const pdfExtract = new PDFExtract();
const options = {}; 
pdfExtract.extract('C:/Users/Vikas/hub.pdf', options, (err, data) => {
  if (err) return console.log(err);
  const text = data.pages.map(page => page.content.map(c => c.str).join(' ')).join('\n');
  console.log(text);
});
