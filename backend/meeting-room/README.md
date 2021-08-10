# Meeting Room Manager (Backend)

Backend para uma aplicação de gerenciamento de salas de reunião. Esse projeto foi desenvolvido com os experts da [Digital Innovation One](https://digitalinnovation.one/).


&nbsp;
## Tecnologias:

1. [Java 16](https://docs.oracle.com/en/java/)
2. [Maven 3.8.1](https://maven.apache.org/guides/)
3. [Spring Boot](https://spring.io/projects/spring-boot)
4. [H2 Database](https://www.h2database.com/html/main.html)


&nbsp;
## Como rodar o backend
1. Caminhe até a pasta *meeting-room*:
```sh
cd backend/meeting-room
```
2. Inicie o backend com o comando:
```sh
mvn springboot:run
```
3. No navegador, acesse:
```sh
http://localhost:8080/api
```
4. Para ver os endpoints disponíveis, acesse:
```sh
http://localhost:8080/api/swagger-ui.html
```

&nbsp;
## Model
1. O tipo RoomDTO segue o modelo abaixo:
```json
{
  "id": 1,
  "name": "Sala 01",
  "date": "2021-10-10",
  "startHour": "21:30:00",
  "endHour": "23:00:00"
}
```



&nbsp;
1.1. Sendo os dados definidos da seguinte forma:
 *  **id**: Long 
* **name**: String
* **date**: LocalDate ("dd-MM-yyyy")
* **startHour**: LocalTime ("HH:mm:ss")
* **endHour**: LocalTime ("HH:mm:ss)


&nbsp;
## Endpoints
Método | Rota | Descrição
-------|------ | -------  
GET | api/rooms | Retorna um JSON com todos os registros
GET | api/rooms/{id} | Retorna um JSON com o registro do id especificado na rota ou status 404 caso não encontre o registro
POST | api/rooms | Retorna o registro criado ou status 422 caso haja conflito de horário
PUT | api/rooms/{id} | Retorna o registro editado ou status 422 caso haja conflito de horário
DELETE | api/rooms/{id} | Retorna o registro deletado ou status 404 caso não encontre o registro
