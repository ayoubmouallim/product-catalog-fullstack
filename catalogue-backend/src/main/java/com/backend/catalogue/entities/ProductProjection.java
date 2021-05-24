package com.backend.catalogue.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "P1",types = {Product.class})
public interface ProductProjection {

      Double getPrice();

      Long getId();
}
