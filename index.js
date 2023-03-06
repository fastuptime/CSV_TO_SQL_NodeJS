const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const readStream = fs.createReadStream('data.csv'); //Girdi
const writeStream = fs.createWriteStream('data.sql'); //Çıktı

const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity,
});


rl.on('line', (line) => {
  const [alan1, alan2, alan3, alan4, alan5, alan6, alan7 ] = line.split('|');

  // Her bir veri satırı için bir SQL sorgusu oluştur
  const sql = `INSERT INTO tablo_adi (ID, AD, SOYAD, GSM, USER_ID, USERNAME, LASTSEEN) VALUES ('${alan1}', '${alan2}', '${alan3}', '${alan4}', '${alan5}', '${alan6}', '${alan7}');\n`;


  // SQL sorgusunu SQL dosyasına yazdır
  writeStream.write(sql);
});

rl.on('close', () => {
  console.log('Dosya başarıyla SQL formatına dönüştürüldü!');
});
