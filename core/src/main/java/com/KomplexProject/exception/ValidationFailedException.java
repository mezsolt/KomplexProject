package com.KomplexProject.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by mezsolt on 2018.05.06..
 */

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class ValidationFailedException extends RuntimeException{

}
