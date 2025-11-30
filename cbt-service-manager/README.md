# 🛠️ CBT Service Manager - Backend

Backend del sistema **CBT Service Manager**, desarrollado con **Spring Boot** y **PostgreSQL**.

Este proyecto expone una API REST que es consumida por el frontend en React/Vite para gestionar:

- Usuarios
- Activos tecnológicos
- Tickets de soporte
- Mantenimientos preventivos/correctivos

---

## 🚀 Tecnologías

- Java 17 (o compatible con tu entorno)
- Spring Boot
  - Spring Web
  - Spring Data JPA
  - Spring Security (configurado en modo abierto para desarrollo)
- PostgreSQL
- Maven

---

## 📁 Estructura principal

```text
src/main/java/com/cbt/cbt_service_manager
 ├── config
 │   ├── SecurityConfig.java
 │   └── CorsConfig.java
 ├── controller
 │   ├── AssetController.java
 │   ├── MaintenanceController.java
 │   ├── TicketController.java
 │   └── UserController.java
 ├── model
 │   ├── Asset.java
 │   ├── Maintenance.java
 │   ├── Role.java
 │   ├── Ticket.java
 │   └── User.java
 ├── repository
 │   ├── AssetRepository.java
 │   ├── MaintenanceRepository.java
 │   ├── RoleRepository.java
 │   ├── TicketRepository.java
 │   └── UserRepository.java
 ├── service
 │   ├── AssetService.java
 │   ├── MaintenanceService.java
 │   ├── TicketService.java
 │   ├── UserService.java
 │   └── impl
 │       ├── AssetServiceImpl.java
 │       ├── MaintenanceServiceImpl.java
 │       ├── TicketServiceImpl.java
 │       └── UserServiceImpl.java
 └── CbtServiceManagerApplication.java
```

---

## 🔧 Configuración de la base de datos

En `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/cbt_service_manager
spring.datasource.username=cbt_user
spring.datasource.password=cbt_pass

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect

server.port=8080
```

1. Crea la base de datos en PostgreSQL:

```sql
CREATE DATABASE cbt_service_manager;
```

2. Crea el usuario (o ajusta usuario/clave a tu entorno):

```sql
CREATE USER cbt_user WITH ENCRYPTED PASSWORD 'cbt_pass';
GRANT ALL PRIVILEGES ON DATABASE cbt_service_manager TO cbt_user;
```

---

## 🔐 Seguridad y CORS

- `SecurityConfig` abre todas las rutas `/api/**` para facilitar el desarrollo.
- `CorsConfig` permite peticiones desde el frontend Vite:

```java
.allowedOrigins("http://localhost:5173")
```

Si usas otro host/puerto para el frontend, actualízalo aquí.

---

## 🌐 Endpoints principales

### 👤 Usuarios

Base path: `/api/users`

- `GET /api/users` → lista todos los usuarios
- `GET /api/users/{id}` → obtiene un usuario por id
- `POST /api/users` → crea un nuevo usuario
- `PUT /api/users/{id}` → actualiza un usuario
- `DELETE /api/users/{id}` → elimina un usuario

### 💻 Activos

Base path: `/api/assets`

- `GET /api/assets`
- `GET /api/assets/{id}`
- `POST /api/assets`
- `PUT /api/assets/{id}`
- `DELETE /api/assets/{id}`

### 🎫 Tickets

Base path: `/api/tickets`

- `GET /api/tickets`
- `GET /api/tickets/{id}`
- `POST /api/tickets?userId={userId}&assetId={assetId?}`
- `PUT /api/tickets/{id}`
- `DELETE /api/tickets/{id}`

> El `userId` es obligatorio (solicitante del ticket).  
> `assetId` es opcional (activo asociado).

### 🛠️ Mantenimientos

Base path: `/api/maintenance`

- `GET /api/maintenance`
- `GET /api/maintenance/{id}`
- `POST /api/maintenance?assetId={assetId}&technicianId={technicianId}`
- `PUT /api/maintenance/{id}/status?status={nuevoEstado}`
- `DELETE /api/maintenance/{id}`

---

## ▶️ Ejecución del proyecto

1. Asegúrate de tener PostgreSQL corriendo y la base creada.
2. Desde la carpeta raíz del proyecto (donde está el `pom.xml`):

```bash
mvn clean install
mvn spring-boot:run
```

El backend quedará escuchando en:

```text
http://localhost:8080
```

y la API en:

```text
http://localhost:8080/api/...
```

---

## 🔗 Integración con el frontend

En el frontend (React/Vite), configura Axios con:

```js
const api = axios.create({
  baseURL: "http://localhost:8080/api",
});
```

Las vistas del frontend consumen, por ejemplo:

- `/users` → `GET http://localhost:8080/api/users`
- `/assets` → `GET http://localhost:8080/api/assets`
- `/tickets` → `GET/POST http://localhost:8080/api/tickets`
- `/maintenance` → `GET/POST http://localhost:8080/api/maintenance`

---

## 📌 Notas

- El modelo está pensado para un escenario académico de gestión de soporte y activos.
- Puedes extenderlo fácilmente con:
  - Autenticación real (JWT)
  - Paginación
  - Filtros, búsqueda avanzada
  - Auditoría de cambios

---

## 👨‍💻 Autor

Proyecto adaptado para integración con frontend Vite/React.

Desarrollado por **Jesús Sosa** como parte de la actividad académica de la asignatura *Electiva Disciplinar II*.
