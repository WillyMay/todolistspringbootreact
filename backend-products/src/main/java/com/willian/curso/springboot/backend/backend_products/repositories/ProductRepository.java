package com.willian.curso.springboot.backend.backend_products.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.willian.curso.springboot.backend.backend_products.entities.Product;

@RepositoryRestResource(path = "products")
@CrossOrigin(origins = "http://localhost:5173/")
public interface ProductRepository extends CrudRepository<Product, Long>{

}
