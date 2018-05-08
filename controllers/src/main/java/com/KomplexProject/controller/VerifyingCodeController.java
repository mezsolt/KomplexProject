package com.KomplexProject.controller;

import com.KomplexProject.entity.VerifyingCodeEntity;
import com.KomplexProject.service.VerifyingCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by mezsolt on 2018.05.03..
 */

@RestController
@RequestMapping(value = "/code")
public class VerifyingCodeController {

    @Autowired
    private VerifyingCodeService verifyingCodeService;

    @RequestMapping(value = "/list",method = RequestMethod.GET)
    private List<VerifyingCodeEntity> getCodes() {
        return this.verifyingCodeService.getAllCodes();
    }

    @RequestMapping(value = "/add",method = RequestMethod.POST)
    private void addCode(@RequestBody VerifyingCodeEntity verifyingCodeEntity) {
        this.verifyingCodeService.addCode(verifyingCodeEntity);
    }

    @RequestMapping(value = "/getOne",method = RequestMethod.POST)
    private VerifyingCodeEntity getOneVerifyingCode(@RequestBody String code) {
        return this.verifyingCodeService.getCode(code);
    }

    @RequestMapping(value = "/search",method = RequestMethod.POST)
    private boolean searchCode(@RequestBody String code) {
        return this.verifyingCodeService.searchCode(code);
    }
}
