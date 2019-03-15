package br.com.peixeurbano.deals.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(schema = "deal_option")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DealOption implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @ManyToOne
    @JsonIgnore
    private Deal deal;
    private BigDecimal normalPrice;
    private BigDecimal salePrice;
    private BigDecimal perncetageDiscount;
    private Long quantityCupom;
    private LocalDate startDate;
    private LocalDate endDate;

}
