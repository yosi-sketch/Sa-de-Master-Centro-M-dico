const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/2baea234-5f04-4a99-8a77-065e5c4b9148/.user_uploaded/media_1793497333329_ed1baae4.png';
const uploadedFlyer = 'C:/Users/matheus/.gemini/antigravity/brain/2baea234-5f04-4a99-8a77-065e5c4b9148/.user_uploaded/media_1793497344754_91a9f1f2.jpg';
const fallbackClinic = 'C:/Users/matheus/.gemini/antigravity/brain/394e682d-b4e5-4c7d-b941-2bc031cfd9e4/.user_uploaded/media_1793495442906_a9264f17.jpg';

const publicDir = path.resolve(__dirname, '../public');
const appDir = path.resolve(__dirname, '../app');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

function createIcoFromPngs(pngBuffers) {
  const numImages = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(numImages, 4); // Number of images

  let offset = 6 + numImages * 16;
  const directoryEntries = [];
  for (const { width, height, buffer } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // Palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Size
    entry.writeUInt32LE(offset, 12); // Offset
    directoryEntries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...directoryEntries, ...pngBuffers.map(p => p.buffer)]);
}

async function build() {
  console.log('Generating Saúde Master Centro Médico assets...');

  // 1. Process Logo
  const trimmedLogoBuffer = await sharp(uploadedLogo)
    .trim({ threshold: 10 })
    .toBuffer();

  const finalLogo = await sharp(trimmedLogoBuffer)
    .extend({
      top: 14,
      bottom: 14,
      left: 18,
      right: 18,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'logo.png'), finalLogo);
  fs.writeFileSync(path.join(publicDir, 'logo-saude-master.png'), finalLogo);
  console.log('✔ Generated public/logo.png & public/logo-saude-master.png');

  // 2. Extract Medical Cross Symbol with ECG Pulse
  // Logo dimensions: 1024 x 342.
  // The medical cross is at left: 400, top: 20, width: 175, height: 150.
  // The cross + pulse line extends to x: ~950.
  // Let's create a clean symbol of the Cross (with its subtle green glow/gradient)
  const crossOnly = await sharp(uploadedLogo)
    .extract({ left: 405, top: 20, width: 165, height: 145 })
    .trim({ threshold: 10 })
    .toBuffer();

  const crossMeta = await sharp(crossOnly).metadata();
  const maxDim = Math.max(crossMeta.width, crossMeta.height);
  const padTop = Math.floor((maxDim - crossMeta.height) / 2) + 12;
  const padBottom = (maxDim - crossMeta.height - Math.floor((maxDim - crossMeta.height) / 2)) + 12;
  const padLeft = Math.floor((maxDim - crossMeta.width) / 2) + 12;
  const padRight = (maxDim - crossMeta.width - Math.floor((maxDim - crossMeta.width) / 2)) + 12;

  const squareSymbol = await sharp(crossOnly)
    .extend({
      top: padTop,
      bottom: padBottom,
      left: padLeft,
      right: padRight,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'logo-symbol.png'), squareSymbol);
  fs.writeFileSync(path.join(publicDir, 'logo-saude-master-symbol.png'), squareSymbol);
  console.log('✔ Generated public/logo-symbol.png & public/logo-saude-master-symbol.png');

  // 3. Generate Favicons and App Icons with high contrast white pill/circle container
  // Circular white badge with crisp green cross
  const iconBase = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
    .composite([
      {
        input: await sharp(squareSymbol)
          .resize(410, 410, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .toBuffer(),
        gravity: 'center'
      }
    ])
    .png()
    .toBuffer();

  // 512x512
  fs.writeFileSync(path.join(publicDir, 'icon-512x512.png'), iconBase);

  // 192x192
  const icon192 = await sharp(iconBase).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'icon.png'), icon192);
  fs.writeFileSync(path.join(appDir, 'icon.png'), icon192);

  // Apple Touch Icon 180x180
  const appleIcon = await sharp(iconBase).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-icon.png'), appleIcon);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), appleIcon);

  // 32x32 & 16x16
  const icon32 = await sharp(iconBase).resize(32, 32).png().toBuffer();
  const icon16 = await sharp(iconBase).resize(16, 16).png().toBuffer();
  const icon48 = await sharp(iconBase).resize(48, 48).png().toBuffer();

  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), icon32);
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), icon16);

  // Multi-size .ico
  const icoBuffer = createIcoFromPngs([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 }
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('✔ Generated all Favicons (.ico, 16x16, 32x32, 192, 512, apple-icon)');

  // 4. Process Campaign Flyer and Senior Portraits
  const flyerBuffer = await sharp(uploadedFlyer)
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'campanha-envelhecer-bem.jpg'), flyerBuffer);
  console.log('✔ Generated public/campanha-envelhecer-bem.jpg');

  // Trio of seniors: y: 265 to 725, width: 819
  const trioBuffer = await sharp(uploadedFlyer)
    .extract({ left: 0, top: 265, width: 819, height: 460 })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'idosos-autonomia.jpg'), trioBuffer);
  console.log('✔ Generated public/idosos-autonomia.jpg');

  // Senior 1 (left)
  const senior1Buffer = await sharp(uploadedFlyer)
    .extract({ left: 0, top: 270, width: 280, height: 440 })
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'senior-1.jpg'), senior1Buffer);

  // Senior 2 (middle)
  const senior2Buffer = await sharp(uploadedFlyer)
    .extract({ left: 270, top: 270, width: 280, height: 440 })
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'senior-2.jpg'), senior2Buffer);

  // Senior 3 (right)
  const senior3Buffer = await sharp(uploadedFlyer)
    .extract({ left: 540, top: 270, width: 279, height: 440 })
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'senior-3.jpg'), senior3Buffer);
  console.log('✔ Generated public/senior-1.jpg, senior-2.jpg, senior-3.jpg');

  // 5. Clinic Interior & Structure Photos
  if (fs.existsSync(fallbackClinic)) {
    const clinicBuf = await sharp(fallbackClinic)
      .jpeg({ quality: 90, mozjpeg: true })
      .toBuffer();
    fs.writeFileSync(path.join(publicDir, 'recepcao-clinica.jpg'), clinicBuf);
    fs.writeFileSync(path.join(publicDir, 'clinica-interior.jpg'), clinicBuf);
    fs.writeFileSync(path.join(publicDir, 'fachada-clinica.jpg'), clinicBuf);
    console.log('✔ Generated public/recepcao-clinica.jpg, clinica-interior.jpg, fachada-clinica.jpg');
  }

  // 6. Generate High-Converting OpenGraph / Social Share Image (1200x630)
  const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#052e16" />
          <stop offset="50%" stop-color="#14532d" />
          <stop offset="100%" stop-color="#166534" />
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#f8fafc" />
        </linearGradient>
      </defs>
      
      <!-- Background with Medical Emerald -->
      <rect width="1200" height="630" fill="url(#bgGrad)" />
      
      <!-- Decorative ECG Line -->
      <path d="M 0 510 L 320 510 L 350 480 L 370 540 L 400 370 L 430 590 L 460 490 L 480 520 L 500 510 L 1200 510" 
            fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="4" />

      <!-- Center White Card -->
      <rect x="70" y="65" width="1060" height="500" rx="28" fill="url(#cardGrad)" stroke="#e2e8f0" stroke-width="2" />
      
      <!-- Eyebrow Badge -->
      <rect x="120" y="110" width="370" height="38" rx="19" fill="#dcfce7" />
      <text x="140" y="134" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#15803d" letter-spacing="1">
        CENTRO DE ESPECIALIDADES MÉDICAS
      </text>

      <!-- Headline -->
      <text x="120" y="200" font-family="Arial, sans-serif" font-size="42" font-weight="900" fill="#0f172a">
        Saúde Master Centro Médico
      </text>
      
      <!-- Campaign Quote -->
      <text x="120" y="250" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#15803d">
        "Envelhecer bem é viver com autonomia."
      </text>

      <!-- Subheadline -->
      <text x="120" y="290" font-family="Arial, sans-serif" font-size="18" font-weight="500" fill="#475569">
        Consultas médicas especializadas, exames e acolhimento humano em Mateus Leme.
      </text>

      <!-- Specialty Pills -->
      <g transform="translate(120, 325)">
        <rect x="0" y="0" width="180" height="38" rx="10" fill="#f0fdf4" stroke="#86efac" />
        <text x="90" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#166534">
          Geriatria &amp; Clínica
        </text>

        <rect x="195" y="0" width="200" height="38" rx="10" fill="#f0fdf4" stroke="#86efac" />
        <text x="295" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#166534">
          Cardiologia &amp; Exames
        </text>

        <rect x="410" y="0" width="200" height="38" rx="10" fill="#f0fdf4" stroke="#86efac" />
        <text x="510" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#166534">
          Ortopedia · Ginecologia
        </text>

        <rect x="625" y="0" width="180" height="38" rx="10" fill="#f0fdf4" stroke="#86efac" />
        <text x="715" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#166534">
          +12 Especialidades
        </text>
      </g>

      <!-- Contact Info -->
      <g transform="translate(120, 395)">
        <text x="0" y="20" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">
          📍 Dr. Tomás de Andrade, 686 - Centro, Mateus Leme - MG
        </text>
        
        <text x="0" y="55" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#15803d">
          🌿 Atendimento humanizado, particular e convênios médicos
        </text>
        
        <text x="0" y="90" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#166534">
          📲 WhatsApp: (31) 9 9619-6155 · (31) 9 9992-2456 | Fixo: (31) 3535-2459
        </text>
      </g>
    </svg>
  `;

  // Composite OG image with real logo in the top right
  const logoResizedForOg = await sharp(finalLogo)
    .resize(290, 95, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const ogBuffer = await sharp(Buffer.from(ogSvg))
    .composite([
      {
        input: logoResizedForOg,
        top: 100,
        left: 800
      }
    ])
    .jpeg({ quality: 92 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), ogBuffer);
  console.log('✔ Generated public/og-image.jpg');

  console.log('✨ All Saúde Master assets created successfully!');
}

build().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
