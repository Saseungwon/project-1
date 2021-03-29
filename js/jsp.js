    /*
       서버 프로그램 없이 마치 서버프로그램이 동작하는 것처럼 현재 사기를 치고 있음
       그것이 가능한 이유는?
       요청 내용이 주소표시줄에 남아 있는 것을 이용했음, 결국 get방식으로만 가능하다
    */
    // 쿼리스트링에서 원하는 값 찾기 일반화
    var request = {};  // 빈 객체 생성
    //1개만 리턴 
    request.getParameter = function(p_schName){   // 메소드 추가
        var v_urlStr = location.href;
        if(v_urlStr.indexOf("?") != -1){
            var v_queryString = v_urlStr.split("?")[1];
            var v_params = v_queryString.split("&");
            for(var i=0; i<v_params.length; i++){
                var v_name = v_params[i].split("=")[0];
                var v_value = v_params[i].split("=")[1];
                if(v_name == p_schName){
                    return  decodeURIComponent(v_value).replaceAll("+"," ");
                }
            }
        }
        return null;  // 이런 건 정하는 것임, 아예 없거나 못 찾았을 때
    }

    // 그룹으로 넘어간 값 배열로 리턴
    request.getParameterValues = function(p_schName){
        var v_urlStr = location.href;
        var v_rsltArr = [];                 // 결과를 담을 빈 배열
        if(v_urlStr.indexOf("?") != -1){
            var v_queryString = v_urlStr.split("?")[1];
            var v_params = v_queryString.split("&");
            for(var i=0; i<v_params.length; i++){
                var v_name = v_params[i].split("=")[0];
                var v_value = v_params[i].split("=")[1];
                if(v_name == p_schName){
                    v_rsltArr.push(decodeURIComponent(v_value).replaceAll("+"," "));
                }
            }
        }
        if(!v_rsltArr.length){
            return null;
        }
        return v_rsltArr;  // 이런 건 정하는 것임, 아예 없거나 못 찾았을 때
    }