$(function(){

    $("#button-1").on("click",function(e){
        e.preventDefault();
        const rollNo=$("#rollno").val();
        const nameStudent=$("#name").val();
        const marksObtained=$("#marks").val();


        if((rollNo === '') || (nameStudent === '') || (marksObtained === '')){
            alert("Please fill all the fields");
        }
        else{
            var appendText="<p>Roll no - <b>"+rollNo+"</b> , <b>"+nameStudent+"</b> have got <b>"+marksObtained+"</b> marks</p>";
            $("#output-details").append(appendText);

            $("#rollno").val("");
            $("#name").val("");
            $("#marks").val("");
        }
    })
});