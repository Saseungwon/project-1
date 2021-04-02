function getUserDogInfo(request) {
    var boardId = request.getParameter('id');
    var userDogInfo = loadItem('userDogInfo');
    var dogInfo;

    for (var i = 0; i < userDogInfo.length; i++) {        
        if (userDogInfo[i].no === Number(boardId)) {

            dogInfo = userDogInfo[i];
            break;
        }
    }

    return dogInfo;
}

function setContentsValue(dogInfo) {
    if (!dogInfo) {
        redirectWithMessage('해당 게시글이 존재하지 않습니다.', './list.html');
        return;
    }

    getElementById('title').value = dogInfo.title;
    getElementById('no').value = dogInfo.no;
    getElementById('writer').value = dogInfo.writer;
    getElementById('breed').value = dogInfo.breed;
    getElementById('content').value = dogInfo.content;
}

function handleResetClick() {
    getElementById('reset').onclick = setRequestValue;
}

$('#dogForm').submit(function(event) {
    event.preventDefault();

    var no = getElementById('no').value;

    var url = $(this).attr('action'); // 여기서 form 전체
    var formData = $(this).serializeObject();

    var userDogInfo = loadItem('userDogInfo');
    
    for (var i = 0; i < userDogInfo.length; i++) {
        var dogInfo = userDogInfo[i];
        
        if (dogInfo.no === Number(no)) {
            dogInfo.title = formData.title;
            dogInfo.content = formData.content;
            dogInfo.breed = formData.breed;

            break;
        }
    }

    setItem('userDogInfo', userDogInfo);
    redirectWithMessage('수정이 완료되었습니다!', url);
});

function deleteUserDogInfo() {
    var no = getElementById('no').value;

    var userDogInfo = loadItem('userDogInfo');

    for (var i = 0; i < userDogInfo.length; i++) {
        var dogInfo = userDogInfo[i];
        
        if(dogInfo.no === Number(no)) {
            userDogInfo.splice(i, 1);
            break;
        }
    }

    var isDelete = confirm('삭제하시겠습니까?');

    if(!isDelete) {
        return false;
    }

    setItem('userDogInfo', userDogInfo);
    redirectWithMessage('삭제되었습니다!', './list.html');
}

function handleDelete() {
    getElementById('delete').onclick = deleteUserDogInfo;
}

function setRequestValue() {
    var request = new Request();

    setContentsValue(getUserDogInfo(request));
}

function init() {
    setRequestValue();
    handleResetClick();
    handleDelete();
}

init();
