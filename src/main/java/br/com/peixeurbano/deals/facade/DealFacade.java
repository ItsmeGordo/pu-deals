package br.com.peixeurbano.deals.facade;

import br.com.peixeurbano.deals.dto.DealDataVMO;
import br.com.peixeurbano.deals.model.Deal;
import br.com.peixeurbano.deals.model.DealOption;
import br.com.peixeurbano.deals.repository.DealRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class DealFacade {

    @Resource
    private DealRepository dealRepository;

    public Deal save(Deal deal) {
        return dealRepository.save(deal);
    }

    public List<DealDataVMO> findAll() {
        List<Deal> deals = dealRepository.findAll();
        List<DealDataVMO> data = getDealDataVMO(deals);
        return data;
    }

    public List<DealDataVMO> findAllActive() {
        List<Deal> deals = dealRepository.findAllWithPublishDateBeforeNowAndEndDateAfterNow();
        List<DealDataVMO> data = getDealDataVMO(deals);
        return data;
    }

    private List<DealDataVMO> getDealDataVMO(List<Deal> deals) {
        List<DealDataVMO> data = new ArrayList<>();
        for (Deal deal : deals) {
            Optional<DealOption> lowestPriceOption = deal.getDealOptions().stream().min(Comparator.comparing(DealOption::getSalePrice));
            BigDecimal lowestPrice = lowestPriceOption.isPresent() ? lowestPriceOption.get().getSalePrice() : BigDecimal.ZERO;
            if (lowestPrice.compareTo(BigDecimal.ZERO) > 0) {
                data.add(DealDataVMO.builder().deal(deal).lowestPrice(lowestPrice).build());
            }
        }
        return data;
    }
}
