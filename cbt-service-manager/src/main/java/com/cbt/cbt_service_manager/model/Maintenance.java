package com.cbt.cbt_service_manager.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "maintenance")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Maintenance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    private String type;

    private String status;

    private LocalDateTime maintenanceDate;

    @ManyToOne
    private Asset asset;

    @ManyToOne
    private User technician;
}
