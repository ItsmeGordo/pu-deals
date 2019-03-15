package br.com.peixeurbano.deals.repository;

import br.com.peixeurbano.deals.model.Deal;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DealRepository extends AbstractRepository<Deal, Long> {

    @Query("select d from Deal d where d.publishDate <= CURRENT_DATE and d.endDate >= CURRENT_DATE")
    List<Deal> findAllWithPublishDateBeforeNowAndEndDateAfterNow();
}
