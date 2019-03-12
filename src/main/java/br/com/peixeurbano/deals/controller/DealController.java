package br.com.peixeurbano.deals.controller;

import br.com.peixeurbano.deals.facade.DealFacade;
import br.com.peixeurbano.deals.model.Deal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/deal")
public class DealController {

    @Autowired
    private DealFacade dealFacade;

    @PostMapping("/saveDeal")
    public Deal saveDeal(Deal deal) {
        return dealFacade.save(deal);
    }

    @GetMapping("/getAllDeals")
    public List<Deal> getDeals() {
        return null;
    }

    @GetMapping("/getDeals/{type}")
    public List<Deal> getDealsByType(@PathVariable Deal.DealType type) {
        return null;
    }
}
