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
    getElementById('title').value = dogInfo.title;
    getElementById('no').value = dogInfo.no;
    getElementById('writer').value = dogInfo.writer;
    getElementById('breed').value = dogInfo.breed;
    getElementById('content').value = dogInfo.content;
}

function init() {
    var request = new Request();
    setContentsValue(getUserDogInfo(request));
}

init();
