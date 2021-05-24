package com.backend.catalogue;

import com.backend.catalogue.dao.ProductRepository;
import com.backend.catalogue.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class CatalogueApplication  implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;
    @Autowired  // to configure restRepository
    private RepositoryRestConfiguration restConfiguration;

    public static void main(String[] args) {
        SpringApplication.run(CatalogueApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        restConfiguration.exposeIdsFor(Product.class); // i am telling him to expose the id for class product

        productRepository.save(new Product(null,"Playstation 4",4000.0,5));
        productRepository.save(new Product(null,"MacBook Pro",10000.0,3));
        productRepository.save(new Product(null,"Dell XPS i10",11000.0,4));
        productRepository.save(new Product(null,"PC Gamer",7300.0,5));
    }
}
