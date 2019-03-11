package br.com.peixeurbano.deals.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Option implements Serializable {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private Deal deal;
    private BigDecimal normalPrice;
    private BigDecimal salePrice;
    private BigDecimal perncetageDiscount;
    private Long quantityCupom;
    private LocalDate startDate;
    private LocalDate endDate;

}
