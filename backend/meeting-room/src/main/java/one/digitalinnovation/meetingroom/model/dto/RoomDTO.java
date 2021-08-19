package one.digitalinnovation.meetingroom.model.dto;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import jakarta.validation.constraints.NotEmpty;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RoomDTO {

    private Long id;

    @NotEmpty
    private String room;

    @NotEmpty
    private String name;

    @NotEmpty
    private String date;

    @NotEmpty
    private String startHour;

    @NotEmpty
    private  String endHour;
}
