package com.cbt.cbt_service_manager.service;

import com.cbt.cbt_service_manager.model.Maintenance;

import java.util.List;
import java.util.Optional;

public interface MaintenanceService {

    Maintenance createMaintenance(Maintenance maintenance, Long assetId, Long technicianId);

    List<Maintenance> listMaintenances();

    Optional<Maintenance> getMaintenance(Long id);

    Optional<Maintenance> updateStatus(Long id, String status);

    boolean deleteMaintenance(Long id);

    Maintenance update(Long id, Maintenance maintenance);

}