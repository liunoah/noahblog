import Toast from "../Toast";

export default function CopyBody() {

    // 处理 copy span 的点击事件
    document.addEventListener('click', function (event) {
        console.log(event);
     
        if (event.target && event.target.matches('.ql-syntax')) {
            
            // event.target.style.backgroundColor = 'rgb(76, 175, 80)';
            const text = event.target.innerText
            copyHandle(text);
            Toast.success('copy success');
            
        }
    });

    // 复制 pre 的 text 的处理函数
    function copyHandle(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.top = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}
