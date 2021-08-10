package one.digitalinnovation.meetingroom.controller;

import jakarta.validation.Valid;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import one.digitalinnovation.meetingroom.model.dto.RoomDTO;
import one.digitalinnovation.meetingroom.service.RoomService;


@RestController
@RequestMapping(path = "/rooms")
@CrossOrigin(origins = "http://localhost:4200/")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<RoomDTO>> getAll() {
        return ResponseEntity.ok()
                .body(roomService.findAll());
    }

    @GetMapping(path = "/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RoomDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok()
                .body(roomService.getById(id));
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,
                 produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RoomDTO> createRoom(@Valid @RequestBody RoomDTO roomDTO) {
        return ResponseEntity.ok()
                .body(roomService.saveRoom(roomDTO));
    }

    @PutMapping(path = "/{id}",
                consumes = MediaType.APPLICATION_JSON_VALUE,
                produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RoomDTO> updateById(@PathVariable Long id,
                                              @Valid @RequestBody RoomDTO roomDTO) {
        return ResponseEntity.ok()
                .body(roomService.updateRoom(id, roomDTO));
    }

    @DeleteMapping(path = "/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RoomDTO> deleteById(@PathVariable Long id) {
        return ResponseEntity.ok()
                .body(roomService.deleteById(id));
    }
}
