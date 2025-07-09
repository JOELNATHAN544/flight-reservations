package com.adorsys_gis.demo;
// import static java.lang.Math.log;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
@RequestMapping("/hello") 
public class HelloWorldController {

    @GetMapping
    public String sayHello() {

        log.info("Saying hello");
        return "Hello, World!";
    }

    @PostMapping
    public String sendGreetings(@RequestBody String greetings){
        log.info("sending greetings...");
        return greetings;

    }

}

