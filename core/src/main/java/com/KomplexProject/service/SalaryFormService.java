package com.KomplexProject.service;

import com.KomplexProject.entity.SalaryFormEntity;
import com.KomplexProject.model.SearchSalaryRequest;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by mezsolt on 2018.04.27..
 */

@Service
public interface SalaryFormService {

    void addSalaryForm(SalaryFormEntity salaryFormEntity) throws IOException;
    List<SalaryFormEntity> getSalaryForms();
    SalaryFormEntity getSalaryFormById(Long id);
    List<SalaryFormEntity> deleteSalaryFormBySearchRequest(SearchSalaryRequest searchSalaryRequest) throws IOException;
    ArrayList<String> getListFromFile(String fileName) throws IOException;
    List<SalaryFormEntity> getSalaryFormListBySearchRequest(SearchSalaryRequest searchSalaryRequest) throws IOException;

    boolean validateSearchSalaryRequest(SearchSalaryRequest searchSalaryRequest) throws IOException;
    boolean validateEntity(SalaryFormEntity salaryFormEntity) throws IOException;

    int searchAverageSalaryByParameters(SearchSalaryRequest searchSalaryRequest) throws IOException;
}
