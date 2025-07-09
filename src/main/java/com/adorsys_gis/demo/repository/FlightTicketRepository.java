package com.adorsys_gis.demo.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adorsys_gis.demo.model.FlightTicket;

public interface FlightTicketRepository extends JpaRepository<FlightTicket, Long> {
    List<FlightTicket> findByDepartureAddressContainingIgnoreCase(String departureAddress);
    List<FlightTicket> findByDestinationAddressContainingIgnoreCase(String destinationAddress);
    List<FlightTicket> findByKickoffTime(LocalDateTime kickoffTime);
    // You can combine these for more advanced search if needed
} 