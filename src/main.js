let htmlContent = document.getElementById('content');
let htmlStyle = document.getElementById('style')

const cursorHTML = `<i id="cursor"></i>`;
const stringContent = `/* 你好，我叫Mia
 * 接下来我要展示一下我的前端功底
 * 首先我要准备一个div (id="graphics")
 **/
#graphics {
  border: 1px dashed gray;
  width: 200px;
  height: 200px;
}
/* 接下来我要把graphics变成一个八卦图
 * 注意看好了
 * 首先，把graphics变成一个圆
 **/
#graphics {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#graphics {
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
}
/* 现在加上阴阳鱼 */
#graphics::before {
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%,
    rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
}
#graphics::after {
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%,
    rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%, rgba(0, 0, 0, 1) 100%);
}
/* 最后让太极图转起来 */
#graphics {
  animation: 3s infinite linear graphics-rotate;
}
@keyframes graphics-rotate {
  100% {transform: translateX(-50%) rotate(360deg);}
}`;

let stringBuffer = "";
let index = 0;

(function printHTML(timeout=20) {
  setTimeout(()=>{
    const isChineseChar = stringContent[index].match(/[\u3400-\u9FBF]/);
    stringBuffer += stringContent[index] === "\n" ? "<br>" : 
      (stringContent[index] === " " ? "&nbsp;" : stringContent[index]);
    htmlContent.innerHTML = stringBuffer + cursorHTML;
    htmlStyle.innerHTML = stringContent.substr(0, index+1);
    window.scrollTo(0, document.body.scrollHeight);
    document.getElementById('content-wrapper').scrollTo(0, 10000);
    if (index < stringContent.length - 1) {
      index ++;
      printHTML(isChineseChar ? 80 : undefined);
    }
  }, timeout);
}) ();