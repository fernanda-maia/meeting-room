package one.digitalinnovation.meetingroom.util;

import lombok.Getter;
import lombok.AllArgsConstructor;


@Getter
@AllArgsConstructor
public enum ErrorMessageUtil {

    ROOM_NOT_FOUND("Room not found");

    private final String description;
}
