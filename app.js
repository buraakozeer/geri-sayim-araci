const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let kullanici = {};
let sepet = [];

console.log('Hoş geldiniz!\n');
readline.question('İsminiz: ', isim => {
    readline.question('Yaşınız: ', yas => {
        readline.question('Mesleğiniz: ', meslek => {
            kullanici = { isim, yas, meslek };
            console.log(`\nMerhaba ${isim}! Hadi alışverişe başlayalım!\n`);
            menu();
        });
    });
});

function menu() {
    console.log('1. Ürün Ekle');
    console.log('2. Sepeti Göster');
    console.log('3. Çıkış\n');

    readline.question('Seçiminiz (1-3): ', secim => {
        if (secim === '1') {
            readline.question('Ürün adı: ', ad => {
                readline.question('Fiyatı: ', fiyat => {
                    sepet.push({ product: ad, price: Number(fiyat) });
                    console.log('Ürün eklendi!\n');
                    menu();
                });
            });
        } 
        else if (secim === '2') {
            if (sepet.length === 0) {
                console.log('Sepet boş!\n');
            } else {
                console.log('\nSepetiniz:');
                console.log(sepet);
                const toplam = sepet.reduce((total, urun) => total + urun.price, 0);
                console.log(`\nToplam Tutar: ${toplam} TL\n`);
            }
            menu();
        }
        else if (secim === '3') {
            console.log('Güle güle!');
            readline.close();
        }
        else {
            console.log('Geçersiz seçim!\n');
            menu();
        }
    });
} 