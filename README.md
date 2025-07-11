
## 🐾 AdoptMe API

API REST para la gestión de adopciones de mascotas. Desarrollada en Node.js con Express, MongoDB y documentada con Swagger.

---

### 📦 Características

- CRUD de **usuarios** y **mascotas**
- Gestión de **adopciones**
- Registro y login de usuarios (con JWT)
- Carga de mascotas con imagen
- Rutas protegidas y sin proteger
- Documentación con Swagger
- Tests funcionales con Mocha
- Docker + Docker Compose

---

### 🚀 Instalación local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/CristianAlbarracinCurso/Adoptme_Albarracin.git
   cd Adoptme_Albarracin
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear un archivo `.env`:
   ```env
   --elija el pueto
   PORT=3000
   --direcion de la base local o externa
   MONGO_URL=mongodb://localhost:27017/adoptme
   ```

4. Ejecutar:
   ```bash
   npm start
   ```

---

### 🧪 Tests

```bash
npm test
```

---

### 🐳 Docker

#### 🔹 Build y ejecución

```bash
docker build -t _____Usuario______/adoptme .
docker run -p 3000:3000 --env-file .env _____Usuario______/adoptme
```

#### 🔹 Docker Compose

Archivo `docker-compose.yml`:

```yaml
services:
  adoptme-app:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    restart: always
```

Comando:

```bash
docker-compose up --build
```

---

### 📘 Swagger Docs

Una vez que la app esté corriendo, accedé a:

📄 `http://localhost:3000/api-docs`

---

### 📁 Rutas principales

| Método | Ruta                             | Descripción                         |
|--------|----------------------------------|-------------------------------------|
| GET    | `/api/users`                     | Listar todos los usuarios           |
| GET    | `/api/pets`                      | Listar todas las mascotas           |
| POST   | `/api/pets/withimage`            | Crear mascota con imagen            |
| POST   | `/api/adoptions/:uid/:pid`       | Adoptar mascota                     |
| GET    | `/api/adoptions`                 | Listar adopciones                   |
| POST   | `/api/sessions/register`         | Registro de usuario                 |
| POST   | `/api/sessions/login`            | Login de usuario                    |
| GET    | `/api/sessions/current`          | Ver usuario actual (con token)      |

---


### ✍ Autor

Cristian Albarracín  
Proyecto final curso Backend Coderhouse 💻
