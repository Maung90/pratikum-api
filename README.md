# Express MicroService

Proyek ini merupakan repositori yang digunakan untuk belajar memahami tentang konsep MicroService. Direpo ini terdapat beberapa folder yang berfungsi sebagai API untuk backend

---

## 🚀 Fitur Utama

- Backend API User
- Backend API Product
- Backend API Transaction
- FrontEnd yang menghubungkan ketiga backend

---

## 🛠️ Instalasi

### 1. Clone Proyek

```bash
git clone https://github.com/maung90/microservice.git
cd microservice
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Salin dan Konfigurasi `.env`

```bash
cp .env.example .env
```

Ubah bagian DB pada `.env`:

```env
DB_HOST = your_host
DB_USER = your_username
DB_PASSWORD = your_password
DB_NAME = your_db
DB_PORT = db_port
```

### 4. Jalankan Server dimasing masing folder

```bash
/folder_name/ npm run dev
```

