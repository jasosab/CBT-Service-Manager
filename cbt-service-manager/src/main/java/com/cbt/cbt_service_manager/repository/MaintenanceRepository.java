package com.cbt.cbt_service_manager.repository;

import com.cbt.cbt_service_manager.model.Maintenance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;


@Repository
public interface MaintenanceRepository extends JpaRepository<Maintenance, Long> {

    long countByStatus(String status);

}
