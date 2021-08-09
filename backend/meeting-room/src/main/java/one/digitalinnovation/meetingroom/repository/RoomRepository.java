package one.digitalinnovation.meetingroom.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import one.digitalinnovation.meetingroom.model.entity.Room;


@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
}
