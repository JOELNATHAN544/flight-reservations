package com.adorsys_gis.demo;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

    @Before("execution(* com.adorsys_gis.demo.HelloWorldController.sayHello())")
    public void logBeforeDriving() {
        logger.info("[LOG] About to drive the car.");
    }
}
