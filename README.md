
Action: file_editor str_replace /app/README.md --old-str "# Full Stack Application

This is a full-stack application with FastAPI backend and React frontend.

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 14+
- MongoDB

### Installation

1. Install backend dependencies:
```bash
cd backend
pip install -r requirements.txt
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

### Running the Application

1. Start the backend:
```bash
cd backend
python server.py
```

2. Start the frontend:
```bash
cd frontend
npm start
```

The application will be available at http://localhost:3000" --new-str "# 📱 idphone

<p align=\"center\">
  <img src=\"https://img.shields.io/badge/version-1.0.0-blue.svg\" alt=\"Version\">
  <img src=\"https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg\" alt=\"Node Version\">
  <img src=\"https://img.shields.io/badge/license-MIT-green.svg\" alt=\"License\">
  <img src=\"https://img.shields.io/badge/author-mdevSky-orange.svg\" alt=\"Author\">
</p>

<p align=\"center\">
  <strong>Library Node.js untuk validasi, normalisasi, dan pengecekan provider nomor telepon Indonesia 🇮🇩</strong>
</p>

---

## ✨ Fitur Utama

- 📝 **Validasi Nomor** - Verifikasi format nomor telepon Indonesia
- 🔄 **Normalisasi Dinamis** - Konversi otomatis ke format 62xxxxx atau +62xxxxx
- 🏢 **Cek Provider** - Identifikasi operator seluler (Telkomsel, Indosat, XL, dll)
- ⚡ **Performa Tinggi** - Proses cepat dan efisien
- 🎯 **Mudah Digunakan** - API sederhana dan intuitif

## 📋 Format yang Didukung

idphone mendukung berbagai format nomor telepon Indonesia:

- ✅ `08xxxxxxxxxx` (Format lokal)
- ✅ `62xxxxxxxxxx` (Format internasional tanpa +)
- ✅ `+62xxxxxxxxxx` (Format internasional dengan +)

## 📦 Instalasi

```bash
npm install idphone
```

atau menggunakan yarn:

```bash
yarn add idphone
```

## 🚀 Cara Penggunaan

### Import Module

```javascript
import { IdPhone } from 'idphone';
```

### Validasi Nomor

Cek apakah nomor telepon valid:

```javascript
// Validasi nomor telepon
console.log(IdPhone.isValid('085878885384'));  // true
console.log(IdPhone.isValid('0085878885384')); // false (format salah)
console.log(IdPhone.isValid('081234567890'));  // true
```

### Normalisasi Nomor

Konversi nomor ke format yang diinginkan:

```javascript
let number = new IdPhone();

// Normalisasi ke format 62xxxxx
console.log(number.normalize('085878885384', '62'));
// Output: 6285878885384

// Normalisasi ke format +62xxxxx
console.log(number.normalize('085878885384', '+62'));
// Output: +6285878885384

// Normalisasi dari format 08 ke 62
console.log(number.normalize('081234567890', '62'));
// Output: 6281234567890
```

### Cek Provider

Identifikasi operator seluler dari nomor:

```javascript
let number = new IdPhone();

// Cek provider nomor
console.log(number.checkProvider('085878885384'));
// Output: { provider: 'Indosat', prefix: '0858' }

console.log(number.checkProvider('081234567890'));
// Output: { provider: 'Telkomsel', prefix: '0812' }

console.log(number.checkProvider('089612345678'));
// Output: { provider: 'Three', prefix: '0896' }
```

### Contoh Penggunaan Lengkap

```javascript
import { IdPhone } from 'idphone';

const phone = new IdPhone();

// Validasi dan normalisasi
const phoneNumber = '085878885384';

if (IdPhone.isValid(phoneNumber)) {
  console.log('Nomor valid!');
  
  // Normalisasi ke berbagai format
  const format62 = phone.normalize(phoneNumber, '62');
  const formatPlus62 = phone.normalize(phoneNumber, '+62');
  
  console.log('Format 62:', format62);        // 6285878885384
  console.log('Format +62:', formatPlus62);   // +6285878885384
  
  // Cek provider
  const provider = phone.checkProvider(phoneNumber);
  console.log('Provider:', provider.provider); // Indosat
} else {
  console.log('Nomor tidak valid!');
}
```

## 📚 API Reference

### `IdPhone.isValid(phoneNumber)`

Memvalidasi apakah nomor telepon memiliki format yang benar.

**Parameters:**
- `phoneNumber` (string): Nomor telepon yang akan divalidasi

**Returns:**
- `boolean`: `true` jika valid, `false` jika tidak valid

**Example:**
```javascript
IdPhone.isValid('085878885384'); // true
```

---

### `normalize(phoneNumber, format)`

Mengubah nomor telepon ke format yang diinginkan.

**Parameters:**
- `phoneNumber` (string): Nomor telepon yang akan dinormalisasi
- `format` (string): Format target ('08', '62', atau '+62')

**Returns:**
- `string`: Nomor telepon dalam format yang diminta

**Example:**
```javascript
const phone = new IdPhone();
phone.normalize('085878885384', '62');  // '6285878885384'
phone.normalize('085878885384', '+62'); // '+6285878885384'
```

---

### `checkProvider(phoneNumber)`

Mengidentifikasi operator seluler dari nomor telepon.

**Parameters:**
- `phoneNumber` (string): Nomor telepon yang akan dicek

**Returns:**
- `object`: Objek berisi informasi provider
  - `provider` (string): Nama operator (Telkomsel, Indosat, XL, Axis, Three, dll)
  - `prefix` (string): Prefix nomor

**Example:**
```javascript
const phone = new IdPhone();
phone.checkProvider('085878885384');
// { provider: 'Indosat', prefix: '0858' }
```

## 🎯 Provider yang Didukung

idphone dapat mengenali berbagai operator seluler Indonesia:

- 📱 **Telkomsel** (0811, 0812, 0813, 0821, 0822, 0823, 0852, 0853)
- 📱 **Indosat** (0814, 0815, 0816, 0855, 0856, 0857, 0858)
- 📱 **XL Axiata** (0817, 0818, 0819, 0859, 0877, 0878)
- 📱 **Axis** (0838, 0831, 0832, 0833)
- 📱 **Three** (0895, 0896, 0897, 0898, 0899)
- 📱 **Smartfren** (0881, 0882, 0883, 0884, 0885, 0886, 0887, 0888, 0889)

## 🛠️ Teknologi

- **Runtime**: Node.js
- **Language**: JavaScript/ES6+
- **Module System**: ES Modules

## 💡 Contoh Kasus Penggunaan

### 1. Validasi Form Registrasi

```javascript
import { IdPhone } from 'idphone';

function validateRegistrationForm(data) {
  if (!IdPhone.isValid(data.phoneNumber)) {
    return {
      valid: false,
      message: 'Nomor telepon tidak valid'
    };
  }
  
  return { valid: true };
}
```

### 2. Format Nomor Sebelum Disimpan ke Database

```javascript
import { IdPhone } from 'idphone';

function saveUserPhone(phoneNumber) {
  const phone = new IdPhone();
  
  // Selalu simpan dalam format 62
  const normalized = phone.normalize(phoneNumber, '62');
  
  // Simpan ke database
  database.save({ phone: normalized });
}
```

### 3. Analisis Provider untuk Marketing

```javascript
import { IdPhone } from 'idphone';

function analyzeCustomerProviders(phoneNumbers) {
  const phone = new IdPhone();
  const providerStats = {};
  
  phoneNumbers.forEach(number => {
    const { provider } = phone.checkProvider(number);
    providerStats[provider] = (providerStats[provider] || 0) + 1;
  });
  
  return providerStats;
}
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Changelog

### Version 1.0.0
- ✨ Fitur validasi nomor telepon
- ✨ Normalisasi dinamis ke berbagai format
- ✨ Pengecekan provider operator seluler
- ✨ Support format 08, 62, dan +62

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**mdevSky**

- GitHub: [@mdevSky](https://github.com/mdevSky)

## 🙏 Acknowledgments

- Terimakasih kepada komunitas JavaScript Indonesia
- Inspirasi dari berbagai library validasi nomor telepon internasional

---

<p align=\"center\">
  Made with ❤️ by mdevSky
</p>

<p align=\"center\">
  <sub>⭐ Jangan lupa beri star jika project ini bermanfaat!</sub>
</p>"
Observation: String replacement failed: No replacement was performed, `old_str` did not appear verbatim in /app/README.md.