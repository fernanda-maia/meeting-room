package one.digitalinnovation.meetingroom.service;

import lombok.AllArgsConstructor;

import one.digitalinnovation.meetingroom.exception.BusinessException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import one.digitalinnovation.meetingroom.model.entity.Room;
import one.digitalinnovation.meetingroom.mapper.RoomMapper;
import one.digitalinnovation.meetingroom.model.dto.RoomDTO;
import one.digitalinnovation.meetingroom.util.ErrorMessageUtil;
import one.digitalinnovation.meetingroom.repository.RoomRepository;
import one.digitalinnovation.meetingroom.exception.NotFoundException;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class RoomService {

    private final RoomMapper roomMapper = RoomMapper.INSTANCE;
    private RoomRepository roomRepository;


    @Transactional(readOnly = true)
    public List<RoomDTO> findAll() {
        return roomMapper.toDTO(roomRepository.findAll());
    }

    @Transactional(readOnly = true)
    public RoomDTO getById(Long id) {
        Room foundRoom = this.verifyIfExists(id);

        return roomMapper.toDTO(foundRoom);
    }

    @Transactional(readOnly = true)
    public List<RoomDTO> getByRoomAndDate(Long id) {
        Room searchedRoom = verifyIfExists(id);

        Optional<List<Room>> roomSearched = this.roomRepository
                        .findByRoomAndDate(searchedRoom.getRoom(), searchedRoom.getDate());

        if(roomSearched.isEmpty()) {
            throw new NotFoundException(ErrorMessageUtil.ROOM_NOT_FOUND);
        }

        return roomMapper.toDTO(roomSearched.get());
    }

    @Transactional
    public RoomDTO saveRoom(RoomDTO roomDTO) {
        Room roomToSave = roomMapper.toModel(roomDTO);
        verifySchedule(roomToSave);
        Room savedRoom = roomRepository.save(roomToSave);

        return roomMapper.toDTO(savedRoom);
    }

    @Transactional
    public RoomDTO updateRoom(Long id, RoomDTO roomDTO) {
        verifyIfExists(id);

        Room roomToUpdate = roomMapper.toModel(roomDTO);

        verifySchedule(roomToUpdate);
        Room updatedRoom = roomRepository.save(roomToUpdate);

        return roomMapper.toDTO(updatedRoom);
    }

    @Transactional
    public RoomDTO deleteById(Long id) {
        Room roomToDelete = verifyIfExists(id);
        RoomDTO roomDTO = roomMapper.toDTO(roomToDelete);

        roomRepository.deleteById(id);

        return roomDTO;
    }

    private Room verifyIfExists(Long id) {
        return roomRepository.findById(id)
                .orElseThrow(() ->
                        new NotFoundException(ErrorMessageUtil.ROOM_NOT_FOUND));
    }

    private void verifySchedule(Room room) {
        if(room.getStartHour().isAfter(room.getEndHour())) {
            throw new BusinessException(ErrorMessageUtil.INVALID_TIME,
                    HttpStatus.CONFLICT);
        }

        Optional<List<Room>> roomSchedule = roomRepository
                .findByRoomAndDate(room.getRoom(), room.getDate());

        if(roomSchedule.isPresent()) {
            boolean any = roomSchedule.get().stream().anyMatch(r -> {

                LocalTime startTime = r.getStartHour();
                LocalTime endTime = r.getEndHour();

                boolean isOccupied = startTime.equals(room.getStartHour()) || endTime.equals(room.getEndHour());

                if(!isOccupied) {
                    isOccupied = startTime.isAfter(room.getStartHour()) && startTime.isBefore(room.getEndHour())
                            || endTime.isAfter(room.getStartHour()) && endTime.isBefore(room.getEndHour())
                            || room.getStartHour().isAfter(startTime) && room.getEndHour().isBefore(endTime)
                            || room.getEndHour().isAfter(startTime) && room.getEndHour().isBefore(endTime);

                }

                return isOccupied && !r.getId().equals(room.getId());

            });

            if(any) {
                throw new BusinessException(ErrorMessageUtil.ROOM_IS_OCCUPIED,
                        HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }
    }

}
