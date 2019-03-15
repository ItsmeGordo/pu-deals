package br.com.peixeurbano.deals.controller;

import br.com.peixeurbano.deals.dto.DealDataVMO;
import br.com.peixeurbano.deals.facade.DealFacade;
import br.com.peixeurbano.deals.model.Deal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/deal")
public class DealController {

    @Autowired
    private DealFacade dealFacade;

    @PostMapping(path = "/saveDeal", consumes = "application/json", produces = "application/json")
    public Deal saveDeal(@RequestBody Deal deal) {
        deal.setCreateDate(LocalDate.now());
        return dealFacade.save(deal);
    }

    @GetMapping("/getAllDeals")
    public List<DealDataVMO> getDeals() {
        return dealFacade.findAllActive();
    }

    @GetMapping("/getDeals/{type}")
    public List<Deal> getDealsByType(@PathVariable Deal.DealType type) {
        return null;
    }
}
