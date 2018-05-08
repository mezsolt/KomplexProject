package com.KomplexProject.repository;

import com.KomplexProject.entity.SalaryFormEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by mezsolt on 2018.04.27..
 */

@Repository
public interface SalaryFormRepository extends JpaRepository<SalaryFormEntity,Long>{
}
