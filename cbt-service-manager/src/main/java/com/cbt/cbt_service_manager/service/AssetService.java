package com.cbt.cbt_service_manager.service;

import com.cbt.cbt_service_manager.model.Asset;

import java.util.List;
import java.util.Optional;

public interface AssetService {

    Asset createAsset(Asset asset);

    List<Asset> listAssets();

    Optional<Asset> getAsset(Long id);

    Optional<Asset> updateAsset(Long id, Asset request);

    boolean deleteAsset(Long id);

    Asset update(Long id, Asset asset);

}
