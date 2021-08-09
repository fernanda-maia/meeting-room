package one.digitalinnovation.meetingroom.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import one.digitalinnovation.meetingroom.util.ErrorMessageUtil;

import java.io.Serial;


@Getter
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NotFoundException extends RuntimeException {

    @Serial
    private static final long serialVersionUID = 1L;

    public NotFoundException(ErrorMessageUtil message) {
        super(message.getDescription());
    }
}
