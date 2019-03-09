package br.com.peixeurbano.deals.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Option implements Serializable {

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
