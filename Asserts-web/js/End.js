 let user_get_name = sessionStorage.getItem("name");
 let user_point = sessionStorage.getItem("point")
 let user_time = sessionStorage.getItem("time")
 document.querySelector(".name").innerHTML = user_get_name;
 document.querySelector(".marks_taken").innerHTML = user_point;
 document.querySelector(".time_taken").innerHTML = user_time;