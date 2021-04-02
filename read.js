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

function redirectUpdatePage() {
    var id = getElementById('no').value;

    location.href = './update_action.html?id=' + id;
}

function handleUpdateClick() {
    getElementById('update').onclick = redirectUpdatePage;
}

function init() {
    var request = new Request();
    setContentsValue(getUserDogInfo(request));
    handleUpdateClick();
}

init();
