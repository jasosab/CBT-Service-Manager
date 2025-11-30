package com.cbt.cbt_service_manager.service.impl;

import com.cbt.cbt_service_manager.model.Asset;
import com.cbt.cbt_service_manager.model.Ticket;
import com.cbt.cbt_service_manager.model.User;
import com.cbt.cbt_service_manager.repository.AssetRepository;
import com.cbt.cbt_service_manager.repository.TicketRepository;
import com.cbt.cbt_service_manager.repository.UserRepository;
import com.cbt.cbt_service_manager.service.TicketService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketServiceImpl implements TicketService {

    private final TicketRepository ticketRepository;
    private final UserRepository userRepository;
    private final AssetRepository assetRepository;

    public TicketServiceImpl(TicketRepository ticketRepository,
                             UserRepository userRepository,
                             AssetRepository assetRepository) {
        this.ticketRepository = ticketRepository;
        this.userRepository = userRepository;
        this.assetRepository = assetRepository;
    }

    @Override
    public Ticket createTicket(Ticket ticket, Long userId, Long assetId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado"));

        ticket.setUser(user);

        if (assetId != null) {
            Asset asset = assetRepository.findById(assetId)
                    .orElseThrow(() -> new IllegalArgumentException("Activo no encontrado"));
            ticket.setAsset(asset);
        }

        if (ticket.getStatus() == null) {
            ticket.setStatus("ABIERTO");
        }

        return ticketRepository.save(ticket);
    }

    @Override
    public List<Ticket> listTickets() {
        return ticketRepository.findAll();
    }

    @Override
    public Optional<Ticket> getTicket(Long id) {
        return ticketRepository.findById(id);
    }

    @Override
    public Optional<Ticket> updateTicket(Long id, Ticket request) {
        return ticketRepository.findById(id).map(existing -> {
            existing.setTitle(request.getTitle());
            existing.setDescription(request.getDescription());
            existing.setStatus(request.getStatus());
            existing.setPriority(request.getPriority());
            return ticketRepository.save(existing);
        });
    }

    @Override
    public boolean deleteTicket(Long id) {
        return ticketRepository.findById(id).map(t -> {
            ticketRepository.delete(t);
            return true;
        }).orElse(false);
    }

    @Override
    public Ticket update(Long id, Ticket ticket) {
        Ticket existing = ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));

        existing.setTitle(ticket.getTitle());
        existing.setDescription(ticket.getDescription());
        existing.setStatus(ticket.getStatus());
        existing.setPriority(ticket.getPriority());

        if (ticket.getUser() != null)
            existing.setUser(ticket.getUser());

        if (ticket.getAsset() != null)
            existing.setAsset(ticket.getAsset());

        return ticketRepository.save(existing);
    }

}
