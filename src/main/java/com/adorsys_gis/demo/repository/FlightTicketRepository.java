package com.adorsys_gis.demo.repository;

import com.adorsys_gis.demo.model.FlightTicket;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.time.LocalDateTime;

public interface FlightTicketRepository extends JpaRepository<FlightTicket, Long> {
    List<FlightTicket> findByDepartureAddressContainingIgnoreCase(String departureAddress);
    List<FlightTicket> findByDestinationAddressContainingIgnoreCase(String destinationAddress);
    List<FlightTicket> findByKickoffTime(LocalDateTime kickoffTime);
    // You can combine these for more advanced search if needed
} 