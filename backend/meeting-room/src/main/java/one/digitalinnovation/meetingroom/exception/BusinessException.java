package one.digitalinnovation.meetingroom.exception;

import lombok.Getter;
import one.digitalinnovation.meetingroom.util.ErrorMessageUtil;
import org.springframework.http.HttpStatus;

import java.io.Serial;


@Getter
public class BusinessException extends RuntimeException {

    @Serial
    private static final long serialVersionUID = 1L;

    private final HttpStatus httpStatus;

    public BusinessException(ErrorMessageUtil message, HttpStatus status) {
        super(message.getDescription());
        this.httpStatus = status;
    }
}
