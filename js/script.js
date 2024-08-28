var upSpeed = 15;   //メッセージのスライド速度
var delay = 3000;   //次のメッセージに切り替わる迄の静止時間
var tickerH = 40;   //表示ボックスの高さ

const btn = document.querySelector('#btn');

//お知らせスクロール
window.onload =function divScroller(){
    scroller = document.getElementById("ticKer");   //div表示ボックス
    scroller.style.height= tickerH+"px";    //表示ボックスの高さ
    scroller.style.lineHeight= tickerH+"px";    //行の高さ
        slide = document.getElementById("ulArea");  //スライドさせる　ul要素
        slide.style.position = "absolute";  //絶対位置
        slide.style.top = tickerH+"px"; // slideのtop(上辺)の位置
        innScroll(tickerH,upSpeed,delay)
}

function innScroll(tickerH,upSpeed,delay){
    msec = upSpeed; //スクロール時間を代入
    numTop = parseInt(slide.style.top)  //数値文字列を整数に変換
    if (numTop > -tickerH){ //topの位置が　-30にならない間は 
        slide.style.top = (numTop-1)+"px";  //topの位置を-1px上へ
    }else{
        slide.style.top = 0+"px";
            cngLi();    //次のメッセージと交代
    }
    if(numTop==0){
        msec = delay;   //静止時間　現在のメッセージを待機
    }
    setTimeout("innScroll("+tickerH+","+upSpeed+","+delay+")",msec);
}

function cngLi(){   //メッセージの移動
    base = document.getElementById("ulArea");
    liList = base.getElementsByTagName("li");   //与えられたタグ名を持つ要素のリスト
    elm = liList[0];    //最上部の"li"要素
    base.appendChild(elm);  //elmを子ノードとして末尾に移動
}

//ダークモード設定
btn.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme');    
    if(btn.textContent === 'ダークモード'){ //ボタンテキストがダークモードなら
        btn.textContent = 'ライトモード';   //クリックされたらライトモードに変更    
    }else{  //そうでないなら「ライトモード」と表示されたら
        btn.textContent = 'ダークモード';   //ダークモードに戻す
    }
});