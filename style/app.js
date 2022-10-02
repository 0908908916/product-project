
// 抓要抓的文字的 class 例: class="thePaths"
const text = document.querySelectorAll(".thePaths");


// 知道每個文字的長度有多長
for (let i = 0; i < text.length; i++) {
    console.log(`text number ${i} length is ${text[i].getTotalLength()}`)
}


// 用 js 讓前面跑動畫 之後作結束 跑回原本底畫面
const lastword = document.querySelector("#fourteenth");  // 最後一個字
const animation = document.querySelector("div.animation");
lastword.addEventListener("animationend", () => {
    animation.style = "transtion: all 1s ease;  opacity: 0; pointer-events: none;";
})

