








studentbd.forEach(( data ) => {
    console.log(`
        Name ---------------: ${ data.name }
        Age ----------------: ${ data.age }
        Class --------------: ${ data.className }
        Roll No ------------: ${ data.roll }
        Gender -------------: ${ data.gender }
        Bangla Gpa ---------: ${ gpaCal( data.marks.bn ) }
        English Gpa --------: ${ gpaCal( data.marks.en ) }
        Math Gpa -----------: ${ gpaCal( data.marks.math ) }
        Science Gpa --------: ${ gpaCal( data.marks.s ) }
        Social Science Gpa -: ${ gpaCal( data.marks.ss ) }
        Religion Gpa -------: ${ gpaCal( data.marks.rel ) }
        Result/Cgpa --------: ${ cgpaCal( gpaCal(data.marks.bn), gpaCal(data.marks.en), gpaCal(data.marks.math), gpaCal(data.marks.s), gpaCal(data.marks.ss), gpaCal(data.marks.rel) ) }
        Total Grade --------: ${ total_grade( cgpaCal( gpaCal(data.marks.bn), gpaCal(data.marks.en), gpaCal(data.marks.math), gpaCal(data.marks.s), gpaCal(data.marks.ss), gpaCal(data.marks.rel) ) ) }
    `);
})


