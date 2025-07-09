package com.adorsys_gis.demo.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FlightTicket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String passengerName;
    private String companyName;
    private String flightNumber;
    private String departureAddress;
    private String destinationAddress;
    private LocalDateTime kickoffTime;
    private BigDecimal price;
    @Enumerated(EnumType.STRING)
    private Status status;
    private LocalDateTime createdAt;

    public enum Status {
        CONFIRMED, PENDING, CANCELLED
    }
} 