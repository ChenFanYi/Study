//查询时间
function showtime() {
    let but = document.getElementById("button");
    but.addEventListener("click", function() {
        document.getElementById("text").innerHTML = new Date().toLocaleString();
        console.log("查看日期成功！")
    });
}
//添加节点元素
function addElement() {
    let p = document.getElementById("text");
    p.addEventListener("click", function() {
        p.innerHTML = "wo yao ri tian!"
    });
}


showtime();
addElement();