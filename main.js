var name_of_students_arry = [];
function submit() {
    var display_student_arry = [];
    for(var j = 1; j<=4; j++) {
        var name_of_students = document.getElementById("name_of_the_student_"+j).value;
        name_of_students_arry.push(name_of_students);
    }
    var length_of_students_arry = name_of_students_arry.length;
    for(var k = 0;k<length_of_students_arry;k++) {
        display_student_arry.push("<h4>Name - " + name_of_students_arry[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_arry;

    var remove_commas = display_student_arry.join("");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    name_of_students_arry.sort();
    var display_student_arry_sorting = [];
    var length_of_students_arry = name_of_students_arry.length;
    for(k=0;k<length_of_students_arry;k++) {
        display_student_arry_sorting.push("<h4>Name - " + name_of_students_arry[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_arry_sorting;

    var remove_commas = display_student_arry_sorting.join("");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}