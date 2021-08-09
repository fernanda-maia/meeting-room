package one.digitalinnovation.meetingroom.util;

import lombok.Getter;
import lombok.AllArgsConstructor;


@Getter
@AllArgsConstructor
public enum ErrorMessageUtil {

    ROOM_NOT_FOUND("Room not found"),
    ROOM_IS_OCCUPIED("Room is occupied this hour");

    private final String description;
}
