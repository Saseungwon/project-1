$(document).ready(function(){

});

function convertDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var createMonth = month > 9 ? month : '0' + month;

    return date.getFullYear() + '-' + createMonth + '-' + date.getDate();
}




function gggMake(){
    var v_tblName = "userDogInfo"
    var v_tblData = [];
    var v_ggg = 1;

    if(localStorage.getItem(v_tblName)){
        v_tblData = JSON.parse(localStorage.getItem(v_tblName));
        v_ggg = v_tblData[v_tblData.length-1].ggg + 1;
    }

}

$('#dogForm').submit(function(event) {
    event.preventDefault();

    var url = $(this).attr('action');
    var data = $(this).serializeObject();

    data.created = convertDate();
    data.ggg = gggMake(); 

    // localStorage에 값이 존재하지 않으면 새로운 배열을 만든다.
    var dogFormList = loadItem('userDogInfo') || [];

    dogFormList.push(data);

    setItem('userDogInfo', dogFormList);
    alert("작성이 완료되었습니다!");
    location.href = url;
});
