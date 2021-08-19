package one.digitalinnovation.meetingroom.mapper;

import one.digitalinnovation.meetingroom.model.dto.RoomDTO;
import one.digitalinnovation.meetingroom.model.entity.Room;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import java.util.List;


@Mapper
public interface RoomMapper {

    RoomMapper INSTANCE = Mappers.getMapper(RoomMapper.class);

    @Mappings({
            @Mapping(target = "date", source = "date", dateFormat = "yyyy-MM-dd"),
            @Mapping(target = "startHour", source = "startHour", dateFormat = "HH:mm:ss"),
            @Mapping(target = "endHour", source = "endHour", dateFormat = "HH:mm:ss")
    })
    Room toModel(RoomDTO roomDTO);
    RoomDTO toDTO(Room room);

    List<RoomDTO> toDTO(List<Room> rooms);
    List<Room> toModel(List<RoomDTO> roomDTOS);

}
