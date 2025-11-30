package com.cbt.cbt_service_manager.service.impl;

import com.cbt.cbt_service_manager.model.Asset;
import com.cbt.cbt_service_manager.model.Maintenance;
import com.cbt.cbt_service_manager.model.User;
import com.cbt.cbt_service_manager.repository.AssetRepository;
import com.cbt.cbt_service_manager.repository.MaintenanceRepository;
import com.cbt.cbt_service_manager.repository.UserRepository;
import com.cbt.cbt_service_manager.service.MaintenanceService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaintenanceServiceImpl implements MaintenanceService {

    private final MaintenanceRepository maintenanceRepository;
    private final AssetRepository assetRepository;
    private final UserRepository userRepository;

    public MaintenanceServiceImpl(MaintenanceRepository maintenanceRepository,
                                  AssetRepository assetRepository,
                                  UserRepository userRepository) {
        this.maintenanceRepository = maintenanceRepository;
        this.assetRepository = assetRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Maintenance createMaintenance(Maintenance maintenance, Long assetId, Long technicianId) {

        Asset asset = assetRepository.findById(assetId)
                .orElseThrow(() -> new IllegalArgumentException("Asset no encontrado: " + assetId));

        User technician = userRepository.findById(technicianId)
                .orElseThrow(() -> new IllegalArgumentException("Técnico no encontrado: " + technicianId));

        maintenance.setAsset(asset);
        maintenance.setTechnician(technician);

        if (maintenance.getStatus() == null) {
            maintenance.setStatus("PROGRAMADO");
        }

        return maintenanceRepository.save(maintenance);
    }

    @Override
    public List<Maintenance> listMaintenances() {
        return maintenanceRepository.findAll();
    }

    @Override
    public Optional<Maintenance> getMaintenance(Long id) {
        return maintenanceRepository.findById(id);
    }

    @Override
    public Optional<Maintenance> updateStatus(Long id, String status) {
        return maintenanceRepository.findById(id).map(existing -> {
            existing.setStatus(status);
            return maintenanceRepository.save(existing);
        });
    }

    @Override
    public boolean deleteMaintenance(Long id) {
        return maintenanceRepository.findById(id).map(m -> {
            maintenanceRepository.delete(m);
            return true;
        }).orElse(false);
    }

    @Override
    public Maintenance update(Long id, Maintenance maintenance) {
        Maintenance existing = maintenanceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Maintenance not found"));

        existing.setDescription(maintenance.getDescription());
        existing.setMaintenanceDate(maintenance.getMaintenanceDate());
        existing.setType(maintenance.getType());
        existing.setStatus(maintenance.getStatus());

        if (maintenance.getAsset() != null)
            existing.setAsset(maintenance.getAsset());

        if (maintenance.getTechnician() != null)
            existing.setTechnician(maintenance.getTechnician());

        return maintenanceRepository.save(existing);
    }

}
