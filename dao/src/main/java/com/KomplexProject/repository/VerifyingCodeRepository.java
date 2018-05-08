package com.KomplexProject.repository;

import com.KomplexProject.entity.VerifyingCodeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by mezsolt on 2018.05.03..
 */

@Repository
public interface VerifyingCodeRepository extends JpaRepository<VerifyingCodeEntity,Long> {
    VerifyingCodeEntity findOneByVerifyingCode(String code);
}
