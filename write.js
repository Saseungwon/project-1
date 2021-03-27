$(document).ready(function(){

});

function convertDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var createMonth = month > 9 ? month : '0' + month;

    return date.getFullYear() + '-' + createMonth + '-' + date.getDate();
}


$('#dogForm').submit(function(event) {
    event.preventDefault();

    var url = $(this).attr('action');
    var data = $(this).serializeObject();

    data.created = convertDate();

    // localStorage에 값이 존재하지 않으면 새로운 배열을 만든다.
    var dogFormList = loadItem('userDogInfo') || [];

    dogFormList.push(data);

    setItem('userDogInfo', dogFormList);
    location.href = url;
});
