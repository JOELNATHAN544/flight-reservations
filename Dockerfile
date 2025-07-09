# Build stage
FROM gradle:8.5.0-jdk17 AS build
COPY . /app
WORKDIR /app
RUN gradle bootJar

# Run stage
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"] 