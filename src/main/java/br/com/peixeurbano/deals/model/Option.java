package br.com.peixeurbano.deals.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Option implements Serializable {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    @ManyToOne(fetch = FetchType.LAZY)
    private Deal deal;
    private BigDecimal normalPrice;
    private BigDecimal salePrice;
    private BigDecimal perncetageDiscount;
    private Long quantityCupom;
    private LocalDateTime startDate;
    private LocalDateTime endDate;

}
