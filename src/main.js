let htmlContent = document.getElementById('content');

const cursorHTML = `<i id="cursor"></i>`;
const stringContent = `/* 你好，我叫Mia
  * 接下来我要展示一下我的前端功底
  * 首先我要准备一个div
  **/`;

let stringBuffer = "";
let index = 0;

(function printHTML() {
  setTimeout(()=>{
    stringBuffer += stringContent[index] === "\n" ? "<br>" : 
      (stringContent[index] === " " ? "&nbsp;" : stringContent[index]);
    htmlContent.innerHTML = stringBuffer + cursorHTML;
    if (index < stringContent.length - 1) {
      index ++;
      printHTML();
    }
  }, 200);
}) ();