window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...
    document.getElementById("top-right").addEventListener('click',clickLogin);

    $('#search-input-box').bind('keyup', function(event) {
        // TODO: 搜索触发后的行为
            if (event.keyCode == 13){
                var str = document.getElementById("search-input-box").value;
                if (str == '' || str==undefined || str==null ){
                    alert('请输入搜索内容');
                }
                else {
                    window.location.replace("https://www.baidu.com/baidu?tn=monline_7_dg&ie=utf-8&wd="+str);
                }
            }
        });
}

function search() {
    // TODO: 搜索触发后的行为
    var str = document.getElementById("search-input-box").value;
    
    if (str == '' || str==undefined || str==null ){
        alert('请输入搜索内容');
    }
    else {
        alert(str);
    }
    
    console.log('');
}






function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name"></span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
    //console.log(username);
    document.getElementById('name').textContent= "已登录用户";
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}