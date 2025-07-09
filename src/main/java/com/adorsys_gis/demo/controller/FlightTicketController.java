package com.adorsys_gis.demo.controller;

import com.adorsys_gis.demo.model.FlightTicket;
import com.adorsys_gis.demo.service.FlightTicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/tickets")
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
} 