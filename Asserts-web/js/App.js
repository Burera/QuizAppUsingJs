window.onload = function(){
    show(0);
}
console.log("Quiz App");
let questions  =[
    {
        id: 1,
        question : "What command do you use to output data to the screen?",
        answer : "Cout",
        options:[
            "Cin",
            "Cout>>",
            "Cout",
            "Output>>"
        ]
    },
    {
        id: 2,
        question : "A Syntax Error is ? ",
        answer : "An error due to user error",
        options:[
            "An error you will never find",
            "An error you find at the end when the program gives out a wrong value due to logic error",
            "An error caused by language rules being broken.",
            "An error due to user error"
        ]
    },
    {
        id: 3,
        question : "Which data structure uses LIFO?",
        answer : "Stacks",
        options:[
            "Array",
            "Int",
            "Stacks",
            "Queues"
        ]
    },
    {
        id: 4,
        question : "A memory location that holds a single letter or number.",
        answer : "Char",
        options:[
            "Double",
            "Int",
            "Char",
            "Word"
        ]
    }
    ,
    {
        id: 5,
        question : "What dose this equation mean ? a != t",
        answer : "A is not equal to t",
        options:[
            "A is assinged t",
            "A and t are equal",
            "A is not equal to t",
            "T is add to a"
        ]
    }
]
let Question_Count = 0;
let test_point = 0;

function next()
{
    let user_click = document.querySelector("li.option.active").innerHTML;
    if(user_click == questions[Question_Count].answer)
    {
        
        test_point += 10;
        
        sessionStorage.setItem("point" , test_point);
    }
    if(Question_Count == questions.length - 1)
    {
        sessionStorage.setItem("time" , `${minutes} minutes and ${seconds} second`)
        clearInterval(new_Again);
        location.href ="End.html";
        return;
    }
   
    Question_Count++;
   
    show(Question_Count)
    
}



function submitForm(e)
{
    let name = document.forms["Form_SUbmitted"]["name"].value;
    e.preventDefault();
    sessionStorage.setItem("name" , name)
    location.href="index.html"
    console.log(name);
}
function show(count)
{
    let questionShow = document.getElementById("questions")
    questionShow.innerHTML=`<h2>Q${Question_Count+1}. ${questions[count].question} </h2>
    <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
</ul> 
    `;
    toggleActive()
}

function toggleActive()
{
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
       
        option[i].onclick = function()
        {
            for (let i = 0; i < option.length; i++) 
            {
               if(option[i].classList.contains("active"))
               {
                   option[i].classList.remove("active")
               }
                
            }
           option[i].classList.add("active");
        
        }
        
    }
}