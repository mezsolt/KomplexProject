package com.KomplexProject.serviceImpl;

import com.KomplexProject.entity.DeletedDataEntity;
import com.KomplexProject.repository.DeletedDataRepository;
import com.KomplexProject.service.DeletedDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by mezsolt on 2018.05.05..
 */

@Service
public class DeletedDataServiceImpl implements DeletedDataService {

    @Autowired
    private DeletedDataRepository deletedDataRepository;

    @Override
    public List<DeletedDataEntity> getDeletedDataEntites() {
        return deletedDataRepository.findAll();
    }

    @Override
    public void addDeletedData(DeletedDataEntity deletedDataEntity) {
        deletedDataRepository.save(deletedDataEntity);
    }
}
