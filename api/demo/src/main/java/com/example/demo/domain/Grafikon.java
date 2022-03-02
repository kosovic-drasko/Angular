package com.example.demo.domain;

import java.io.Serializable;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Grafikon.
 */
@Entity
@Table(name = "grafikon")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Grafikon implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "region")
    private String region;

    @Column(name = "prodaja")
    private Integer prodaja;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public Integer getProdaja() {
        return prodaja;
    }

    public void setProdaja(Integer prodaja) {
        this.prodaja = prodaja;
    }
}
