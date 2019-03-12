package br.com.peixeurbano.deals.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
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
    private LocalDateTime createDate;
    private LocalDateTime publishDate;
    private LocalDateTime endDate;
    private String url;
    private Long totalSold;
    @Enumerated(EnumType.STRING)
    private DealType type;
    @OneToMany(mappedBy = "deal", fetch = FetchType.LAZY)
    private List<Option> options;

}
