package com.cbt.cbt_service_manager.controller;

import com.cbt.cbt_service_manager.repository.AssetRepository;
import com.cbt.cbt_service_manager.repository.MaintenanceRepository;
import com.cbt.cbt_service_manager.repository.TicketRepository;
import com.cbt.cbt_service_manager.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Arrays;


@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin("*")
@RequiredArgsConstructor
public class DashboardController {

    private final UserRepository userRepository;
    private final AssetRepository assetRepository;
    private final TicketRepository ticketRepository;
    private final MaintenanceRepository maintenanceRepository;

    @GetMapping("/stats")
    public Map<String, Object> getStats() {

        long totalUsers = userRepository.count();
        long totalAssets = assetRepository.count();
        long totalTickets = ticketRepository.count();
        long totalMaintenances = maintenanceRepository.count();

        // Tickets por mes (últimos 4 meses)
        List<Map<String, Object>> ticketsPorMes = ticketRepository.countTicketsByMonth();

        // SLA por grupo (simulado, pero podríamos hacerlo real si defines grupos)
        List<Map<String, Object>> slaData = Arrays.asList(
                Map.of("grupo", "Soporte N1", "sla", 97),
                Map.of("grupo", "Soporte N2", "sla", 94),
                Map.of("grupo", "Mantenimiento", "sla", 99)
        );

        Map<String, Object> stats = new HashMap<>();
        stats.put("users", totalUsers);
        stats.put("assets", totalAssets);
        stats.put("tickets", totalTickets);
        stats.put("maintenances", totalMaintenances);
        stats.put("ticketsPorMes", ticketsPorMes);
        stats.put("slaData", slaData);

        return stats;
    }
}

