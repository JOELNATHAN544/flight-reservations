package com.adorsys_gis.demo.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.adorsys_gis.demo.model.FlightTicket;
import com.adorsys_gis.demo.service.FlightTicketService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/tickets")
@CrossOrigin(origins = "http://localhost:8081")
@RequiredArgsConstructor
public class FlightTicketController {
    private final FlightTicketService service;

    @PostMapping
    public FlightTicket createTicket(@RequestBody FlightTicket ticket) {
        return service.createTicket(ticket);
    }

    @GetMapping
    public List<FlightTicket> getAllTickets() {
        return service.getAllTickets();
    }

    @GetMapping("/search")
    public List<FlightTicket> searchTickets(
            @RequestParam(required = false) String departure,
            @RequestParam(required = false) String destination,
            @RequestParam(required = false) String kickoffTime,
            @RequestParam(required = false) String flightNumber,
            @RequestParam(required = false) String status  
    ) {
        if (departure != null) {
            return service.searchByDeparture(departure);
        } else if (destination != null) {
            return service.searchByDestination(destination);
        } else if (kickoffTime != null) {
            return service.searchByKickoffTime(LocalDateTime.parse(kickoffTime));
        } else if (flightNumber != null) {
            return service.searchByFlightNumber(flightNumber);
        } else if (status != null) {
            return service.searchByStatus(FlightTicket.Status.valueOf(status));
        } else {
            return service.getAllTickets();
        }
    }

    @PutMapping("/{id}")
    public FlightTicket updateTicket(@PathVariable Long id, @RequestBody FlightTicket ticket) {
        ticket.setId(id);
        return service.updateTicket(ticket);
    }
} 