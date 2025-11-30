package com.cbt.cbt_service_manager.controller;

import com.cbt.cbt_service_manager.model.Maintenance;
import com.cbt.cbt_service_manager.service.MaintenanceService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/maintenance")
@CrossOrigin(origins = "http://localhost:5173")
public class MaintenanceController {

    private final MaintenanceService maintenanceService;

    public MaintenanceController(MaintenanceService maintenanceService) {
        this.maintenanceService = maintenanceService;
    }

    @PostMapping
    public ResponseEntity<Maintenance> create(
            @RequestBody Maintenance request,
            @RequestParam Long assetId,
            @RequestParam Long technicianId
    ) {
        Maintenance created = maintenanceService.createMaintenance(request, assetId, technicianId);
        return ResponseEntity.ok(created);
    }

    @GetMapping
    public List<Maintenance> list() {
        return maintenanceService.listMaintenances();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Maintenance> findById(@PathVariable Long id) {
        return maintenanceService.getMaintenance(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Maintenance> updateStatus(@PathVariable Long id,
                                                    @RequestParam String status) {

        return maintenanceService.updateStatus(id, status)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

        if (maintenanceService.deleteMaintenance(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
