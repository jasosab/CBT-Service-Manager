package com.cbt.cbt_service_manager.repository;

import com.cbt.cbt_service_manager.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    @Query(value = """
            SELECT 
                TO_CHAR(created_at, 'Mon') AS mes,
                COUNT(*) AS total
            FROM tickets
            GROUP BY TO_CHAR(created_at, 'Mon'), DATE_TRUNC('month', created_at)
            ORDER BY DATE_TRUNC('month', created_at)
            LIMIT 4
            """, nativeQuery = true)
    List<Map<String, Object>> countTicketsByMonth();
}
