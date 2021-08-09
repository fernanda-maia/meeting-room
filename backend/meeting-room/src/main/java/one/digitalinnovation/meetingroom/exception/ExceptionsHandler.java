package one.digitalinnovation.meetingroom.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.context.request.WebRequest;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ControllerAdvice;

import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;


@ControllerAdvice
public class ExceptionsHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    protected ResponseEntity<ExceptionResponse> notFoundException(
            NotFoundException e,
            WebRequest request) {

        ExceptionResponse response = new ExceptionResponse (
                LocalDateTime.now(),
                e.getMessage(),
                request.getDescription(false)
        );

        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(BusinessException.class)
    protected ResponseEntity<ExceptionResponse> businessException(
            BusinessException e,
            WebRequest request) {

        ExceptionResponse response = new ExceptionResponse(
                LocalDateTime.now(),
                e.getMessage(),
                request.getDescription(false)
        );

        return new ResponseEntity<>(response, e.getHttpStatus());
    }
}
