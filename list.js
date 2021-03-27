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

function emptyMessage() {
    var tagStr = '';

    tagStr += '<tr>';
    tagStr += '<th scope="row" colspan="5">공유할 수 있는 정보가 없어요!</th>';
    tagStr += '</tr>';

    return tagStr;
}

function appendTableContents() {
    var tagStr = '';
    var table = $('#dogInfoTable');
    var dogsInfo = loadItem('userDogInfo');

    if (!dogsInfo) {
        table.append(emptyMessage());
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
}

init();