
-- Seed data for cbt_service_manager

-- ROLES
INSERT INTO roles (name) VALUES
('ADMIN'),('TECHNICICAN'),('USER'),('SUPERVISOR'),('MANAGER'),
('OPERATOR'),('LEADER'),('SUPPORT'),('COORDINATOR'),('ANALYST'),
('ENGINEER'),('STAFF'),('ASSISTANT'),('DIRECTOR'),('INTERN');

-- USERS
INSERT INTO users (full_name, email, password, enabled, created_at) VALUES
('Carlos Mendoza', 'carlos@example.com', 'pass123', true, NOW()),
('Ana Pérez', 'ana@example.com', 'pass123', true, NOW()),
('Luis Torres', 'luis@example.com', 'pass123', true, NOW()),
('María Díaz', 'maria@example.com', 'pass123', true, NOW()),
('David Romero', 'david@example.com', 'pass123', true, NOW()),
('Elena Ruiz', 'elena@example.com', 'pass123', true, NOW()),
('Jorge Silva', 'jorge@example.com', 'pass123', true, NOW()),
('Natalia López', 'natalia@example.com', 'pass123', true, NOW()),
('Marco Vargas', 'marco@example.com', 'pass123', true, NOW()),
('Sara Jiménez', 'sara@example.com', 'pass123', true, NOW()),
('Pedro Cano', 'pedro@example.com', 'pass123', true, NOW()),
('Lucía Herrera', 'lucia@example.com', 'pass123', true, NOW()),
('Andrés Castro', 'andres@example.com', 'pass123', true, NOW()),
('Paula Castro', 'paula@example.com', 'pass123', true, NOW()),
('Tomás Gutiérrez', 'tomas@example.com', 'pass123', true, NOW());

-- USER_ROLES
INSERT INTO user_roles (user_id, role_id) VALUES
(1,1),(2,2),(3,3),(4,4),(5,5),
(6,6),(7,7),(8,8),(9,9),(10,10),
(11,11),(12,12),(13,13),(14,14),(15,15);

-- ASSETS
INSERT INTO assets (name, type, serial_number, status, description, location) VALUES
('Laptop Dell XPS','Laptop','SN001','Active','Equipo portátil','Oficina 101'),
('Monitor Samsung','Monitor','SN002','Active','Pantalla 24"','Oficina 102'),
('Impresora HP','Printer','SN003','Maintenance','Impresora láser','Sala impresión'),
('Router Cisco','Networking','SN004','Active','Router empresarial','DataCenter'),
('MacBook Pro','Laptop','SN005','Active','Equipo de diseño','Oficina 103'),
('Proyector Epson','Projector','SN006','In Repair','Proyector reuniones','Sala B'),
('Teléfono IP','Phone','SN007','Active','Extensión','Oficina 203'),
('Switch TP-Link','Networking','SN008','Active','Switch 24p','Rack 2'),
('Tablet Lenovo','Tablet','SN009','Active','Uso administrativo','Oficina 202'),
('Servidor Dell','Server','SN010','Active','Servidor principal','DataCenter'),
('ThinkPad Lenovo','Laptop','SN011','Active','Uso técnico','Oficina 105'),
('Cámara Logitech','Camera','SN012','Active','Videollamadas','Sala C'),
('UPS APC','Power','SN013','Active','Respaldo energía','DataCenter'),
('Smart TV LG','TV','SN014','Active','Presentaciones','Sala A'),
('Access Point Ubiquiti','Networking','SN015','Active','WiFi','Pasillo 1');

-- TICKETS
INSERT INTO tickets (title, description, status, priority, user_id, asset_id, created_at, updated_at) VALUES
('Pantalla no enciende','Sin imagen','Open','High',1,2,NOW(),NOW()),
('Laptop lenta','Rendimiento bajo','In Progress','Medium',2,1,NOW(),NOW()),
('Impresora sin impresión','Error trabajos','Open','High',3,3,NOW(),NOW()),
('Fallo de red','Sin conexión','Closed','High',4,4,NOW(),NOW()),
('Actualización','Software requerido','Open','Low',5,5,NOW(),NOW()),
('Proyector fallando','Sin HDMI','Open','Medium',6,6,NOW(),NOW()),
('Sin tono','Teléfono sin línea','In Progress','Medium',7,7,NOW(),NOW()),
('Switch fallando','Reinicios','Open','High',8,8,NOW(),NOW()),
('Tablet bloqueada','No desbloquea','Closed','Low',9,9,NOW(),NOW()),
('Servidor caliente','Alta temperatura','Open','Critical',10,10,NOW(),NOW()),
('Laptop no carga','Falla cargador','Open','High',11,11,NOW(),NOW()),
('Cámara sin imagen','USB no detectado','In Progress','Medium',12,12,NOW(),NOW()),
('UPS alarma','Pitido constante','Open','High',13,13,NOW(),NOW()),
('TV sin señal','HDMI sin detectar','Open','Low',14,14,NOW(),NOW()),
('WiFi débil','Acceso intermitente','Open','Medium',15,15,NOW(),NOW());

-- MAINTENANCE
INSERT INTO maintenance (description, date, type, status, asset_id, technician_id) VALUES
('Cambio pasta térmica','2025-01-01','Preventive','Completed',1,1),
('Limpieza general','2025-01-02','Preventive','Completed',2,2),
('Revisión red','2025-01-03','Corrective','Completed',3,3),
('Ajuste UPS','2025-01-04','Corrective','Pending',4,4),
('Mantenimiento proyector','2025-01-05','Preventive','Completed',5,5),
('Cambio filtro','2025-01-06','Preventive','Completed',6,6),
('Ventilador dañado','2025-01-07','Corrective','Pending',7,7),
('Cargador falla','2025-01-08','Corrective','Completed',8,8),
('Optimización sistema','2025-01-09','Preventive','Completed',9,9),
('Revisión eléctrica','2025-01-10','Corrective','Completed',10,10),
('Limpieza teclado','2025-01-11','Preventive','Completed',11,11),
('Revisión cámara','2025-01-12','Preventive','Completed',12,12),
('Batería falla','2025-01-13','Corrective','Pending',13,13),
('Firmware update','2025-01-14','Preventive','Completed',14,14),
('Cableado dañado','2025-01-15','Corrective','Completed',15,15);

