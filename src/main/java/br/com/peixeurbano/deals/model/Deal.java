package br.com.peixeurbano.deals.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Deal implements Serializable {

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
