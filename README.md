# 📘 CBT Service Manager -- Monorepo (Backend + Frontend)

Sistema académico completo para la gestión de **Tickets**, **Activos
Tecnológicos**, **Usuarios** y **Mantenimientos
preventivos/correctivos**.\
Incluye:

-   🟦 **Frontend** en React + Vite\
-   🟧 **Backend** en Spring Boot + PostgreSQL

Ambos proyectos están estructurados dentro de un mismo repositorio.

## 📂 Estructura del Repositorio

``` text
/CBT-Service-Manager
 ├── backend/      → API REST en Spring Boot
 └── frontend/     → Aplicación React + Vite (dashboard administrativo)
```

## 🚀 Tecnologías Generales

### 🔹 Frontend

-   React 19
-   Vite
-   React Router DOM 7
-   Axios
-   Bootstrap 5
-   Recharts
-   Context API
-   CSS Modules

### 🔹 Backend

-   Java 17\
-   Spring Boot\
-   Spring Web\
-   Spring Data JPA\
-   PostgreSQL\
-   Maven

### 🔹 Base de datos

-   PostgreSQL 15+
-   Hibernate / JPA

## 🧩 Funcionalidades Generales

### ✔ Usuarios

### ✔ Activos Tecnológicos

### ✔ Tickets de Soporte

### ✔ Mantenimiento Técnico

### ✔ Dashboard Profesional

## 🛠️ Backend -- Spring Boot

### 📁 Estructura

``` text
src/main/java/com/cbt/cbt_service_manager
 ├── config
 ├── controller
 ├── model
 ├── repository
 ├── service
 └── service/impl
```

### 🔗 Endpoints principales

-   `/api/users`
-   `/api/assets`
-   `/api/tickets`
-   `/api/maintenance`

### 🗄️ Base de datos

``` sql
CREATE DATABASE cbt_service_manager;
CREATE USER cbt_user WITH ENCRYPTED PASSWORD 'cbt_pass';
GRANT ALL PRIVILEGES ON DATABASE cbt_service_manager TO cbt_user;
```

### ▶️ Ejecutar

``` bash
cd backend
mvn clean install
mvn spring-boot:run
```

------------------------------------------------------------------------

# 🖥️ Frontend -- React + Vite

### 📁 Estructura

``` text
src/
 ├── api/
 ├── components/
 ├── context/
 ├── layout/
 ├── pages/
 ├── main.jsx
 └── App.jsx
```

### 🔌 Axios

``` js
const api = axios.create({
  baseURL: "http://localhost:8080/api",
});
```

### ▶️ Ejecutar

``` bash
cd frontend
npm install
npm run dev
```

------------------------------------------------------------------------

# 👨‍💻 Autor

**Jesús Sosa**\
Desarrollador Backend & Frontend

# 📄 Licencia

Uso académico y libre extensión.
