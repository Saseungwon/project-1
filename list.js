
// 키값에 따라 벨류값 지정 기능
function converToDogBreed(numberBreed) {
    var dogBreedData = {
        '1': '없음',
        '2': '푸들',
        '3': '골든리트리버',
        '4': '보더콜리',
        '5': '리트리버',
        '6': '코카스파니엘',
        '7': '포메라니안',
        '8': '기타',
    };

    // object(dogBreedData)는 키와 value값을 가지는데 
    // object[key]하면 리턴은 value
    return dogBreedData[numberBreed];
}


// 리스트에 글 없을 때 메세지 출력 기능
function emptyMessage() {
    var tagStr = '';

    tagStr += '<tr>';
    tagStr += '<th scope="row" colspan="5">공유할 수 있는 정보가 없어요!</th>';
    tagStr += '</tr>';

    return tagStr;
}

// 테이블 컨텐츠들 합치는 기능 
function appendTableContents() {
    var tagStr = '';
    var table = $('#dogInfoTable');
    var dogsInfo = loadItem('userDogInfo');

    if (!dogsInfo) {
        table.append(emptyMessage()); // dogsInfo에 글 없으면  emptyMessage 리턴 
        return;
    }
    
    for (let i = 0; i < dogsInfo.length; i++) {
        var dogInfo = dogsInfo[i];
        
        tagStr += '<tr>';
        tagStr += '<th scope="row" >' + (i + 1) + '</th>';
        tagStr += '<td>' + dogInfo.title + '</td>';
        tagStr += '<td>' + dogInfo.writer + '</td>';
        tagStr += '<td>' + converToDogBreed(dogInfo.breed) + '</td>';
        tagStr += '<td>' + dogInfo.created + '</td>';
        tagStr += '</tr>';

    }

    table.append(tagStr);
}

function init() {
    appendTableContents();
    alert("작성이 완료되었습니다!");
}

init();