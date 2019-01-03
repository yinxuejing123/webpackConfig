import _ from 'lodash';
import printMe from './print.js'

// import './style.css';
// import MyImage from './timg.jpg';
// import Data from './data.xml';

function component(){
    var element = document.createElement('div')
//    Lodash, now imported by this script
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello','webpack'],'');

    btn.innerHTML = 'You can click me and check the console';
    btn.onclick = printMe;

    element.appendChild(btn);

    // element.classList.add('hello');

    //图片添加到创建出来的原有div上
    // var myImage = new Image();
    // myImage.src = MyImage;
    // element.appendChild(myImage);
    //
    // console.log(Data)

    return element;
}
// document.body.appendChild(component());

let element = component();//当print.js改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if(module.hot){
    module.hot.accept('./print.js',function () {
        console.log('Accepting the updated pringtMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component();//重新渲染页面后，component更新click事件处理
        document.body.appendChild(element);
    })
}