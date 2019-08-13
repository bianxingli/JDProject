package org.lanqiao.jd;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
@MapperScan("org.lanqiao.jd.mapper")
public class JdApplication {

    public static void main(String[] args) {
        SpringApplication.run(JdApplication.class, args);
    }

}
