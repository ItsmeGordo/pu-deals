package br.com.peixeurbano.deals.repository;

import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

import javax.persistence.EntityManager;
import java.io.Serializable;

public class AbstractRepositoryImpl<T, ID extends Serializable> extends SimpleJpaRepository<T, ID> implements AbstractRepository<T, ID> {

    private final EntityManager entityManager;

    public AbstractRepositoryImpl(Class<T> domainClass, EntityManager entityManager) {
        super(domainClass, entityManager);
        this.entityManager = entityManager;
    }


}
