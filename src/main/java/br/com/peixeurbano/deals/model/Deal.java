package br.com.peixeurbano.deals.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Deal implements Serializable {

    public enum DealType {
        LOCAL,
        PRODUTO,
        VIAGEM
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String text;
    private LocalDate createDate;
    private LocalDate publishDate;
    private LocalDate endDate;
    private String url;
    private long totalSold;
    @Enumerated(EnumType.STRING)
    private DealType type;
    @OneToMany(mappedBy = "deal", fetch = FetchType.EAGER)
    private List<DealOption> dealOptions;

}
