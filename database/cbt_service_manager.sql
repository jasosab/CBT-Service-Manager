-- Database: cbt_service_manager

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    full_name VARCHAR(150),
    email VARCHAR(150) UNIQUE,
    password VARCHAR(255),
    enabled BOOLEAN,
    created_at TIMESTAMP
);

CREATE TABLE roles (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE
);

CREATE TABLE user_roles (
    user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
    role_id BIGINT REFERENCES roles(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, role_id)
);

CREATE TABLE assets (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    serial_number VARCHAR(255),
    status VARCHAR(255),
    description VARCHAR(255),
    location VARCHAR(255)
);

CREATE TABLE tickets (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(150),
    description TEXT,
    status VARCHAR(30),
    priority VARCHAR(30),
    user_id BIGINT REFERENCES users(id),
    asset_id BIGINT REFERENCES assets(id),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE maintenances (
    id BIGINT PRIMARY KEY,
    created_at TIMESTAMP,
    description TEXT,
    maintenance_date DATE,
    status VARCHAR(255),
    type VARCHAR(255),
    asset_id BIGINT REFERENCES assets(id),
    technician_id BIGINT REFERENCES users(id)
);

CREATE TABLE maintenance (
    id SERIAL PRIMARY KEY,
    description TEXT,
    date DATE,
    type VARCHAR(50),
    status VARCHAR(30),
    asset_id INT REFERENCES assets(id),
    technician_id INT REFERENCES users(id)
);
