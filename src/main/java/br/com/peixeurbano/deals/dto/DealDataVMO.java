package br.com.peixeurbano.deals.dto;

import br.com.peixeurbano.deals.model.Deal;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class DealDataVMO {

    private Deal deal;
    private BigDecimal lowestPrice;
}
