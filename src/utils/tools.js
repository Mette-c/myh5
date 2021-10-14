//ajax请求封装
function request(url,callback,method='get') {
    //设置基础路径
    const baseUrl = "http://120.76.247.5:2003/api";
    url = baseUrl+url;
    //创建一个异步请求
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        let data = JSON.parse(xhr.responseText);
        if(typeof callback === 'function'){
            callback(data);
        }
       
    }
    //设置请求参数
    xhr.open(method,url,true);
    xhr.send();
}