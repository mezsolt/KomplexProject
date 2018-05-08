package com.KomplexProject.serviceImpl;

import com.KomplexProject.entity.SalaryFormEntity;
import com.KomplexProject.exception.ValidationFailedException;
import com.KomplexProject.model.SearchSalaryRequest;
import com.KomplexProject.repository.SalaryFormRepository;
import com.KomplexProject.service.SalaryFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by mezsolt on 2018.04.27..
 */

@Service
public class SalaryFormServiceImpl implements SalaryFormService{

    @Autowired
    private SalaryFormRepository salaryFormRepository;

    @Override
    public void addSalaryForm(SalaryFormEntity salaryFormEntity) throws IOException {
        if(validateEntity(salaryFormEntity)){
            this.salaryFormRepository.save(salaryFormEntity);
        }
    }

    @Override
    public List<SalaryFormEntity> getSalaryForms() {
        List<SalaryFormEntity> salaryFormEntities = this.salaryFormRepository.findAll();
        Collections.shuffle(salaryFormEntities);
        return salaryFormEntities;
    }

    @Override
    public SalaryFormEntity getSalaryFormById(Long id) {
        return this.salaryFormRepository.getOne(id);
    }

    @Override
    public List<SalaryFormEntity> deleteSalaryFormBySearchRequest(SearchSalaryRequest searchSalaryRequest) throws IOException {
        List<SalaryFormEntity> salaryFormEntities = this.salaryFormRepository.findAll();
        List<SalaryFormEntity> deletedEntites = new ArrayList<>();

        if(!validateSearchSalaryRequest(searchSalaryRequest)) {
            throw new ValidationFailedException();
        }

        for(int i=0;i<salaryFormEntities.size();i++) {
            if((salaryFormEntities.get(i).getGender().equals(searchSalaryRequest.getGender()) || searchSalaryRequest.getGender().equals("Összes")) &&
                    (salaryFormEntities.get(i).getAge().equals(searchSalaryRequest.getAge()) || searchSalaryRequest.getAge().equals("Összes")) &&
                    (salaryFormEntities.get(i).getForeignLanguages().equals(searchSalaryRequest.getForeignLanguages()) || searchSalaryRequest.getForeignLanguages().equals("Összes")) &&
                    (salaryFormEntities.get(i).getEducationAttained().equals(searchSalaryRequest.getEducationAttained()) || searchSalaryRequest.getEducationAttained().equals("Összes")) &&
                    (salaryFormEntities.get(i).getPlaceOfWork().equals(searchSalaryRequest.getPlaceOfWork()) || searchSalaryRequest.getPlaceOfWork().equals("Összes")) &&
                    (salaryFormEntities.get(i).getExperience().equals(searchSalaryRequest.getExperience()) || searchSalaryRequest.getExperience().equals("Összes")) &&
                    (salaryFormEntities.get(i).getPosition().equals(searchSalaryRequest.getPosition()) || searchSalaryRequest.getPosition().equals("Összes"))
                    ){
                deletedEntites.add(salaryFormEntities.get(i));
                this.salaryFormRepository.deleteById(salaryFormEntities.get(i).getId());
            }
        }

        return deletedEntites;
    }

    public boolean validateEntity(SalaryFormEntity salaryFormEntity) throws IOException {
        if(!salaryFormEntity.getGender().equals("Férfi") &&
                !salaryFormEntity.getGender().equals("Nő")
                ) {
            return false;
        }

        if(salaryFormEntity.getSalary() < 100000 || salaryFormEntity.getSalary() > 1000000) {
            return false;
        }

        if(!getListFromFile("ageList").contains(salaryFormEntity.getAge())) {
            return false;
        }

        if(!getListFromFile("placeOfWorkList").contains(salaryFormEntity.getPlaceOfWork())) {
            return false;
        }

        if(!getListFromFile("educationAttainedList").contains(salaryFormEntity.getEducationAttained())) {
            return false;
        }

        if(!getListFromFile("foreignLanguagesList").contains(salaryFormEntity.getForeignLanguages())) {
            return false;
        }

        if(!getListFromFile("workExperienceList").contains(salaryFormEntity.getExperience())) {
            return false;
        }

        if(!getListFromFile("workPositionList").contains(salaryFormEntity.getPosition())) {
            return false;
        }

        return true;
    }

    public ArrayList<String> getListFromFile(String fileName) throws IOException {
        File file = new File("C:\\Users\\User\\IdeaProjects\\KomplexProject\\dao\\src\\main\\resources\\" + fileName);
        BufferedReader br = new BufferedReader(new FileReader(file));

        ArrayList<String> list = new ArrayList<>();

        String st;
        while ((st = br.readLine()) != null) {
            list.add(st);
        }

        return list;
    }

    @Override
    public List<SalaryFormEntity> getSalaryFormListBySearchRequest(SearchSalaryRequest searchSalaryRequest) throws IOException {
        List<SalaryFormEntity> salaryFormEntities = this.salaryFormRepository.findAll();
        List<SalaryFormEntity> searchedEntites = new ArrayList<>();

        if(!validateSearchSalaryRequest(searchSalaryRequest)) {
            throw new ValidationFailedException();
        }

        for(int i=0;i<salaryFormEntities.size();i++) {
            if((salaryFormEntities.get(i).getGender().equals(searchSalaryRequest.getGender()) || searchSalaryRequest.getGender().equals("Összes")) &&
                    (salaryFormEntities.get(i).getAge().equals(searchSalaryRequest.getAge()) || searchSalaryRequest.getAge().equals("Összes")) &&
                    (salaryFormEntities.get(i).getForeignLanguages().equals(searchSalaryRequest.getForeignLanguages()) || searchSalaryRequest.getForeignLanguages().equals("Összes")) &&
                    (salaryFormEntities.get(i).getEducationAttained().equals(searchSalaryRequest.getEducationAttained()) || searchSalaryRequest.getEducationAttained().equals("Összes")) &&
                    (salaryFormEntities.get(i).getPlaceOfWork().equals(searchSalaryRequest.getPlaceOfWork()) || searchSalaryRequest.getPlaceOfWork().equals("Összes")) &&
                    (salaryFormEntities.get(i).getExperience().equals(searchSalaryRequest.getExperience()) || searchSalaryRequest.getExperience().equals("Összes")) &&
                    (salaryFormEntities.get(i).getPosition().equals(searchSalaryRequest.getPosition()) || searchSalaryRequest.getPosition().equals("Összes"))
                    ){
                searchedEntites.add(salaryFormEntities.get(i));
            }
        }

        return searchedEntites;
    }

    @Override
    public int searchAverageSalaryByParameters(SearchSalaryRequest searchSalaryRequest) throws IOException {
        List<SalaryFormEntity> salaryFormEntities = this.salaryFormRepository.findAll();
        List<SalaryFormEntity> searchedEntites = new ArrayList<>();
        int sum=0;
        int result=0;

        if(!validateSearchSalaryRequest(searchSalaryRequest)) {
            throw new ValidationFailedException();
        }

        for(int i=0;i<salaryFormEntities.size();i++) {
            if((salaryFormEntities.get(i).getGender().equals(searchSalaryRequest.getGender()) || searchSalaryRequest.getGender().equals("Összes")) &&
                    (salaryFormEntities.get(i).getAge().equals(searchSalaryRequest.getAge()) || searchSalaryRequest.getAge().equals("Összes")) &&
                    (salaryFormEntities.get(i).getForeignLanguages().equals(searchSalaryRequest.getForeignLanguages()) || searchSalaryRequest.getForeignLanguages().equals("Összes")) &&
                    (salaryFormEntities.get(i).getEducationAttained().equals(searchSalaryRequest.getEducationAttained()) || searchSalaryRequest.getEducationAttained().equals("Összes")) &&
                    (salaryFormEntities.get(i).getPlaceOfWork().equals(searchSalaryRequest.getPlaceOfWork()) || searchSalaryRequest.getPlaceOfWork().equals("Összes")) &&
                    (salaryFormEntities.get(i).getExperience().equals(searchSalaryRequest.getExperience()) || searchSalaryRequest.getExperience().equals("Összes")) &&
                    (salaryFormEntities.get(i).getPosition().equals(searchSalaryRequest.getPosition()) || searchSalaryRequest.getPosition().equals("Összes"))
                    ){
                searchedEntites.add(salaryFormEntities.get(i));
            }
        }

        for(int i=0;i<searchedEntites.size();i++) {
            sum = sum + searchedEntites.get(i).getSalary();
        }

        if(!(searchedEntites.size() == 0)) {
            result = (int)(sum / searchedEntites.size());
        }

        return result;
    }

    public boolean validateSearchSalaryRequest(SearchSalaryRequest searchSalaryRequest) throws IOException {
        if(!searchSalaryRequest.getGender().equals("Férfi") &&
                !searchSalaryRequest.getGender().equals("Nő") &&
                !searchSalaryRequest.getGender().equals("Összes")
                ) {
            return false;
        }

        if(!getListFromFile("ageList").contains(searchSalaryRequest.getAge()) && !searchSalaryRequest.getAge().equals("Összes")) {
            return false;
        }

        if(!getListFromFile("placeOfWorkList").contains(searchSalaryRequest.getPlaceOfWork()) && !searchSalaryRequest.getPlaceOfWork().equals("Összes")) {
            return false;
        }

        if(!getListFromFile("educationAttainedList").contains(searchSalaryRequest.getEducationAttained()) && !searchSalaryRequest.getEducationAttained().equals("Összes")) {
            return false;
        }

        if(!getListFromFile("foreignLanguagesList").contains(searchSalaryRequest.getForeignLanguages()) && !searchSalaryRequest.getForeignLanguages().equals("Összes")) {
            return false;
        }

        if(!getListFromFile("workExperienceList").contains(searchSalaryRequest.getExperience()) && !searchSalaryRequest.getExperience().equals("Összes")) {
            return false;
        }

        if(!getListFromFile("workPositionList").contains(searchSalaryRequest.getPosition()) && !searchSalaryRequest.getPosition().equals("Összes")) {
            return false;
        }

        return true;
    }
}

