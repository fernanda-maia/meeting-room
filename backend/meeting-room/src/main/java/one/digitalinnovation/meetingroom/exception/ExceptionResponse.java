package one.digitalinnovation.meetingroom.exception;

import lombok.Getter;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;


@Getter
@AllArgsConstructor
public class ExceptionResponse {

    private final LocalDateTime timestamp;
    private final String message;
    private final String details;
}
