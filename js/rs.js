let pic = document.getElementsByClassName('pic4');
let btn_right = document.getElementsByClassName('right-dir')[0];
let btn_left = document.getElementsByClassName('left-dir')[0];
// 分别获取到图片，以及两个箭头
let index = 0;
//该变量用于获取图片序号

btn_right.onclick = function(){
    pic[index].className = "pic4";
    index+=1;
    if(index>=pic.length-1){
        index=0;
    }
    pic[index].className = "pic4 hid4"
}
btn_left.onclick = function(){
    pic[index].className = "pic4";
    index-=1;
    if(index<0){
        index=6;
    }
    pic[index].className = "pic4 hid4"
}
