package com.backend.catalogue.dao;

import com.backend.catalogue.entities.Product;
import com.backend.catalogue.entities.ProductProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
//@RepositoryRestResource(excerptProjection =ProductProjection.class) //if you want applicate the project with using ?projection=names
@RepositoryRestController
public interface ProductRepository extends JpaRepository<Product,Long> {

    @RestResource(path = "/byDesignation")
    public List<Product> findByDesignationContains(@Param("des") String des);

    @RestResource(path = "/byDesignationPage")
    public Page<Product> findByDesignationContains(@Param("des") String des, Pageable page);
}
