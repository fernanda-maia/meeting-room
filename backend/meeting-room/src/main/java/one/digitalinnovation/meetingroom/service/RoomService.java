package one.digitalinnovation.meetingroom.service;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import one.digitalinnovation.meetingroom.model.entity.Room;
import one.digitalinnovation.meetingroom.mapper.RoomMapper;
import one.digitalinnovation.meetingroom.model.dto.RoomDTO;
import one.digitalinnovation.meetingroom.util.ErrorMessageUtil;
import one.digitalinnovation.meetingroom.repository.RoomRepository;
import one.digitalinnovation.meetingroom.exception.NotFoundException;

import java.util.List;


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

    @Transactional
    public RoomDTO saveRoom(RoomDTO roomDTO) {
        Room roomToSave = roomMapper.toModel(roomDTO);
        Room savedRoom = roomRepository.save(roomToSave);

        return roomMapper.toDTO(savedRoom);
    }

    @Transactional
    public RoomDTO updateRoom(Long id, RoomDTO roomDTO) {
        verifyIfExists(id);

        Room roomToUpdate = roomMapper.toModel(roomDTO);
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
}
