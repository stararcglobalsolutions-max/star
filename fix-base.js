const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.push('next.config.ts');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  content = content.replace(/"\/stararc\//g, '"/');
  content = content.replace(/'\/stararc\//g, "'/");
  content = content.replace(/`\/stararc\//g, "`/");
  content = content.replace(/basePath: "\/stararc",/g, '');
  content = content.replace(/const basePath = "\/stararc";/g, 'const basePath = "";');
  content = content.replace(/href: "\/stararc"/g, 'href: "/"');
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
