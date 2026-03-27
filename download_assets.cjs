const fs = require('fs');
const https = require('https');
const path = require('path');

const dirs = [
  'src/pages',
  'src/components',
  'public/cursos',
  'public/vozes',
  'public/reportagens',
  'public/galeria',
  'public/sobre',
  'public/home'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const downloads = [
  // Cursos
  { url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800", dest: "public/cursos/designer-unhas.jpg" },
  { url: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&q=80&w=800", dest: "public/cursos/extensao-cilios.jpg" },
  { url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800", dest: "public/cursos/designer-sobrancelhas.jpg" },
  { url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800", dest: "public/cursos/informatica.jpg" },
  { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920", dest: "public/cursos/hero.jpg" },

  // Vozes
  { url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800", dest: "public/vozes/maria-silva.jpg" },
  { url: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800", dest: "public/vozes/ana-paula.jpg" },

  // Reportagens
  { url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800", dest: "public/reportagens/g1.jpg" },
  { url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800", dest: "public/reportagens/correio.jpg" },
  { url: "https://images.unsplash.com/photo-1585829365294-bb7c63b3ecda?auto=format&fit=crop&q=80&w=800", dest: "public/reportagens/agencia-brasilia.jpg" },

  // Galeria - Fotos só de mulheres estudando/trabalhando
  { url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800", dest: "public/galeria/img1.jpg" },
  { url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800", dest: "public/galeria/img2.jpg" },
  { url: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=800", dest: "public/galeria/img3.jpg" },
  { url: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80&w=800", dest: "public/galeria/img4.jpg" },
  { url: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=800", dest: "public/galeria/img5.jpg" },
  { url: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&q=80&w=800", dest: "public/galeria/img6.jpg" },

  // Home / Sobre
  { url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920", dest: "public/home/hero.jpg" },
  { url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920", dest: "public/sobre/hero.jpg" },
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, response => {
      // Follow redirects if necessary (Unsplash might redirect once)
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, redirectResponse => {
            redirectResponse.pipe(file);
            file.on('finish', () => { file.close(); resolve(); });
        });
      } else {
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', err => {
      fs.unlink(dest, () => {});
      console.error(err);
      resolve(); // ignore errors for now, just continue
    });
  });
};

async function run() {
  for (const d of downloads) {
    if(!fs.existsSync(d.dest)) {
        console.log(`Downloading ${d.dest}...`);
        await download(d.url, d.dest);
    }
  }
  console.log('All downloads complete.');
}
run();
