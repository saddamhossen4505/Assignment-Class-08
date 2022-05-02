



/**
 *  GPA-CALCULATION :
 * ==================
 */


function gpaCal( marks ){

    let gpa = 0;

    if( marks >= 0 && marks < 33 ){
        gpa = 0;
    }else if( marks >= 33 && marks < 40 ){
        gpa = 1;
    }else if( marks >= 40 && marks < 50 ){
        gpa = 2;
    }else if( marks >= 50 && marks < 60 ){
        gpa = 3;
    }else if( marks >= 60 && marks < 70 ){
        gpa = 3.5;
    }else if( marks >= 70 && marks < 80 ){
        gpa = 4;
    }else if( marks >= 80 && marks <= 100 ){
        gpa = 5;
    }else{
        'Invalid Result'
    }

    return gpa;
};




/**
 *  GRADE CALCULATION :
 * ===================
 */

 function gradeCal( marks ){

    let grade = '';

    if( marks >= 0 && marks < 33 ){
        grade = 'F';
    }else if( marks >= 33 && marks < 40 ){
        grade = 'D';
    }else if( marks >= 40 && marks < 50 ){
        grade = 'C';
    }else if( marks >= 50 && marks < 60 ){
        grade = 'B';
    }else if( marks >= 60 && marks < 70 ){
        grade = 'A-';
    }else if( marks >= 70 && marks < 80 ){
        grade = 'A';
    }else if( marks >= 80 && marks <= 100 ){
        grade = 'A+';
    }else{
        'Invalid Result'
    }

    return grade;
};




/**
 *  CGPA-CALCULATION :
 * ===================
 */
const cgpaCal = ( bn, en, math, s, ss, rel ) => {

    let total_gpa = ( bn + en + math + s + ss + rel )
    let cgpa = total_gpa/6

    if( bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0 ){
        return "Result Fail"
    }else{
        return `${ cgpa }`
    }
};




/**
 *  TOTAL GRADE CALCULATION :
 * ==========================
 */

const total_grade = ( cgpa ) => {

    let grade = '';
    
    if( cgpa >= 0 && cgpa < 1 ){
        grade = "F";
    }else if( cgpa >= 1 && cgpa < 2 ){
        grade = "D";
    }else if( cgpa >= 2 && cgpa < 3 ){
        grade = "C";
    }else if( cgpa >= 3 && cgpa < 3.5 ){
        grade = "B";
    }else if( cgpa >= 3.5 && cgpa < 4 ){
        grade = "A-";
    }else if( cgpa >= 4 && cgpa < 5 ){
        grade = "A";
    }else if( cgpa ==5 ){
        grade = "A+";
    }else{
        "F"
    }

    return grade;

};




