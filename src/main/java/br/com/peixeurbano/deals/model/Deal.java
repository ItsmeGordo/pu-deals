package br.com.peixeurbano.deals.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Deal implements Serializable {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String text;
    private LocalDate createDate;
    private LocalDate publishDate;
    private LocalDate endDate;
    private String url;
    private Long totalSold;
    private String type;

}
