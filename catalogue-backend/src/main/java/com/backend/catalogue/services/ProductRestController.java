package com.backend.catalogue.services;

import com.backend.catalogue.dao.ProductRepository;
import com.backend.catalogue.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class ProductRestController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/listProduits")
    public List<Product> getProducts()
    {
        return productRepository.findAll();
    }

    @GetMapping("/listProduits/{id}")
    public Product getProducts(@PathVariable Long id)
    {
        return productRepository.findById(id).get();
    }

    @PutMapping("/listProduits/{id}")
    public Product updateProduct(@PathVariable Long id,@RequestBody Product produit)
    {
         produit.setId(id);
        return productRepository.save(produit);

    }

    @PostMapping("/listProduits/")
    public Product addProduct(@RequestBody Product produit)
    {
        return productRepository.save(produit);

    }

    @DeleteMapping("/listProduits/{id}")
    public void deleteProduct(@PathVariable Long id)
    {
         productRepository.deleteById(id);
    }
}
