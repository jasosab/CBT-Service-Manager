package com.cbt.cbt_service_manager.service;

import com.cbt.cbt_service_manager.model.Ticket;

import java.util.List;
import java.util.Optional;

public interface TicketService {

    Ticket createTicket(Ticket ticket, Long userId, Long assetId);

    List<Ticket> listTickets();

    Optional<Ticket> getTicket(Long id);

    Optional<Ticket> updateTicket(Long id, Ticket request);

    boolean deleteTicket(Long id);

    Ticket update(Long id, Ticket ticket);

}
