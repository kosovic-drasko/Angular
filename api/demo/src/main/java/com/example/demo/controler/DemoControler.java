package com.example.demo.controler;

import com.example.demo.domain.Grafikon;
import com.example.demo.repository.DemoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class DemoControler {

    @Autowired
  private DemoRepository demoRepository;


    @GetMapping(value = "/grafikon")
    public List<Grafikon> getGrafikon()
    {
        List<Grafikon> grafikon = demoRepository.findAll();

        return grafikon;
    }
}
