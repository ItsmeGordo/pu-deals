package br.com.peixeurbano.deals.facade;

import br.com.peixeurbano.deals.model.Deal;
import br.com.peixeurbano.deals.repository.DealRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class DealFacade {

    @Resource
    private DealRepository dealRepository;

    public Deal save(Deal deal) {
        return dealRepository.save(deal);
    }
}
