package com.alfarays.welcome;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/messages")
@Slf4j
@Validated
@Tag(
        name = "Welcome",
        description = "REST endpoints for managing welcome message."
)
public class WelcomeResource {

    @GetMapping
    @Operation(
            summary = "Welcome message",
            description = "Returns a welcome message to the user."
    )
    @ApiResponses({
            @ApiResponse(responseCode = "200",
                    description = "Message fetched successfully",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Map.class))),
            @ApiResponse(responseCode = "500",
                    description = "Internal server error",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class)))
    })
    public ResponseEntity<?> welcome() {
        Map<String, String> map = new HashMap<>();
        map.put("message", "Welcome to FitVerse fitness tracker and guides.");
        return ResponseEntity.ok(map);
    }

}
