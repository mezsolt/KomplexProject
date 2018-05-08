package com.KomplexProject.controller;

import com.KomplexProject.entity.DeletedDataEntity;
import com.KomplexProject.service.DeletedDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by mezsolt on 2018.05.05..
 */

@RestController
@RequestMapping(value = "/deleteddata")
public class DeletedDataController {

    @Autowired
    private DeletedDataService deletedDataService;

    @RequestMapping(value = "/list",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    List<DeletedDataEntity> listDeletedDatas() {
        return this.deletedDataService.getDeletedDataEntites();
    }

}
