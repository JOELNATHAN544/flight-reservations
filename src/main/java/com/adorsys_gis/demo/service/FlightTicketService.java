package com.adorsys_gis.demo.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.adorsys_gis.demo.model.FlightTicket;
import com.adorsys_gis.demo.repository.FlightTicketRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FlightTicketService {
    private final FlightTicketRepository repository;

    public FlightTicket createTicket(FlightTicket ticket) {
        ticket.setCreatedAt(LocalDateTime.now());
        return repository.save(ticket);
    }

    public List<FlightTicket> getAllTickets() {
        return repository.findAll();
    }

    public List<FlightTicket> searchByDeparture(String departure) {
        return repository.findByDepartureAddressContainingIgnoreCase(departure);
    }

    public List<FlightTicket> searchByDestination(String destination) {
        return repository.findByDestinationAddressContainingIgnoreCase(destination);
    }

    public List<FlightTicket> searchByKickoffTime(LocalDateTime kickoffTime) {
        return repository.findByKickoffTime(kickoffTime);
    }

    public List<FlightTicket> searchByFlightNumber(String flightNumber) {
        return repository.findByFlightNumberContainingIgnoreCase(flightNumber);
    }

    public List<FlightTicket> searchByStatus(FlightTicket.Status status) {
        return repository.findByStatus(status);
    }

    public FlightTicket updateTicket(FlightTicket ticket) {
        Optional<FlightTicket> existingOpt = repository.findById(ticket.getId());
        if (existingOpt.isEmpty()) {
            throw new RuntimeException("Ticket not found");
        }
        FlightTicket existing = existingOpt.get();
        existing.setPassengerName(ticket.getPassengerName());
        existing.setCompanyName(ticket.getCompanyName());
        existing.setFlightNumber(ticket.getFlightNumber());
        existing.setDepartureAddress(ticket.getDepartureAddress());
        existing.setDestinationAddress(ticket.getDestinationAddress());
        existing.setKickoffTime(ticket.getKickoffTime());
        existing.setPrice(ticket.getPrice());
        existing.setStatus(ticket.getStatus());
        return repository.save(existing);
    }
} 