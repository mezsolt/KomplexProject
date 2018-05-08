package com.KomplexProject.serviceImpl;

import com.KomplexProject.entity.VerifyingCodeEntity;
import com.KomplexProject.repository.VerifyingCodeRepository;
import com.KomplexProject.service.VerifyingCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by mezsolt on 2018.05.03..
 */

@Service
public class VerifyingCodeServiceImpl implements VerifyingCodeService{

    @Autowired
    private VerifyingCodeRepository verifyingCodeRepository;

    @Override
    public VerifyingCodeEntity getCode(String code) {
        return verifyingCodeRepository.findOneByVerifyingCode(code);
    }

    @Override
    public List<VerifyingCodeEntity> getAllCodes() {
        return verifyingCodeRepository.findAll();
    }

    @Override
    public void addCode(VerifyingCodeEntity verifyingCodeEntity) {
        verifyingCodeRepository.save(verifyingCodeEntity);
    }

    @Override
    public boolean searchCode(String code) {
        List<VerifyingCodeEntity> verifyingCodeEntities = verifyingCodeRepository.findAll();
        boolean result = false;

        for(int i=0;i<verifyingCodeEntities.size();i++){
            if(verifyingCodeEntities.get(i).getVerifyingCode().equals(code)) {
                result = true;
            }
        }
        return result;
    }
}
