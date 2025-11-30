package com.cbt.cbt_service_manager.service.impl;

import com.cbt.cbt_service_manager.model.Asset;
import com.cbt.cbt_service_manager.repository.AssetRepository;
import com.cbt.cbt_service_manager.service.AssetService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssetServiceImpl implements AssetService {

    private final AssetRepository assetRepository;

    public AssetServiceImpl(AssetRepository assetRepository) {
        this.assetRepository = assetRepository;
    }

    @Override
    public Asset createAsset(Asset asset) {
        return assetRepository.save(asset);
    }

    @Override
    public List<Asset> listAssets() {
        return assetRepository.findAll();
    }

    @Override
    public Optional<Asset> getAsset(Long id) {
        return assetRepository.findById(id);
    }

    @Override
    public Optional<Asset> updateAsset(Long id, Asset request) {
        return assetRepository.findById(id).map(existing -> {
            existing.setName(request.getName());
            existing.setType(request.getType());
            existing.setSerialNumber(request.getSerialNumber());
            existing.setStatus(request.getStatus());
            return assetRepository.save(existing);
        });
    }

    @Override
    public boolean deleteAsset(Long id) {
        return assetRepository.findById(id).map(asset -> {
            assetRepository.delete(asset);
            return true;
        }).orElse(false);
    }

    @Override
    public Asset update(Long id, Asset asset) {
        Asset existing = assetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Asset not found"));

        existing.setName(asset.getName());
        existing.setType(asset.getType());
        existing.setSerialNumber(asset.getSerialNumber());
        existing.setStatus(asset.getStatus());

        return assetRepository.save(existing);
    }

}
