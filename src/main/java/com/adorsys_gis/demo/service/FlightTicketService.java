package com.adorsys_gis.demo.service;

import com.adorsys_gis.demo.model.FlightTicket;
import com.adorsys_gis.demo.repository.FlightTicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

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
} 