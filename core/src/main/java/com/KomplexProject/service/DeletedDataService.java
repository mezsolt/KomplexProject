package com.KomplexProject.service;

import com.KomplexProject.entity.DeletedDataEntity;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by mezsolt on 2018.05.05..
 */

@Service
public interface DeletedDataService {
    List<DeletedDataEntity> getDeletedDataEntites();
    void addDeletedData(DeletedDataEntity deletedDataEntity);
}
