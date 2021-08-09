package one.digitalinnovation.meetingroom.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import one.digitalinnovation.meetingroom.model.entity.Room;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

    Optional<List<Room>> findByNameAndDate(String name, LocalDate date);
}
