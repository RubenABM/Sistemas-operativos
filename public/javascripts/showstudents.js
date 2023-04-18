window.onload = async function getStudents(){

    let organize = document.getElementById("container");

    console.log("CHAMouuuuuuuuuu")

    try{
 
        let students = await $.ajax({
  
          url: "/students/",
          method: "get",
          dataType: "json",
   
        });
   
        console.log("Students: = " + JSON.stringify(students));
        
        html = "";
        
        html += "<table><tr><th>ID</th><th>Nome</th><th>Número</th></tr>";

        for(let student of students){

            let idaluno = student.stu_id
            let nomealuno = student.stu_name
            let numeroaluno = student.stu_phone
            
            html += "" + "<tr><td>" + idaluno + "</td><td>" + nomealuno + "</td><td>" + numeroaluno + "</td></tr>";
        }
        
        html += "</table>";

        organize.innerHTML = html;

    } catch(err){
        console.log(err);
    }

}