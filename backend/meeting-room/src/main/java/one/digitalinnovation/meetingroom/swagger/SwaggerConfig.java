package one.digitalinnovation.meetingroom.swagger;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class SwaggerConfig {

    private final Contact contactInfo = new Contact()
            .name("Fernanda Ribeiro")
            .url("https://www.linkedin.com/in/fernanda-ribeiro-07882b49/");

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI().info(new Info()
                .title("API - Meeting Room Managment")
                .description("Backed Room Manager Application")
                .version("1.0.0")
                .termsOfService("http://swagger.io/terms")
                .contact(contactInfo)
                .license(new License()
                        .name("Apache 2.0")
                        .url("http://springdoc.org")));
    }
}