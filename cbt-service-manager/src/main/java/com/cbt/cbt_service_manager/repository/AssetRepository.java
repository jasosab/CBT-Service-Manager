package com.cbt.cbt_service_manager.repository;

import com.cbt.cbt_service_manager.model.Asset;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssetRepository extends JpaRepository<Asset, Long> {
}
