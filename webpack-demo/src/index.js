// import _ from 'lodash';
// import printMe from './print.js'

// import './styles.css';
// import MyImage from './timg.jpg';
// import Data from './data.xml';

// function component(){
//     var element = document.createElement('div')
// //    Lodash, now imported by this script
//     var btn = document.createElement('button');
//     element.innerHTML = _.join(['Hello','webpack'],'');
//
//     btn.innerHTML = 'You can click me and check the console';
//     btn.onclick = printMe;
//
//     element.appendChild(btn);
//
//     // element.classList.add('hello');
//
//     //图片添加到创建出来的原有div上
//     // var myImage = new Image();
//     // myImage.src = MyImage;
//     // element.appendChild(myImage);
//     //
//     // console.log(Data)
//
//     return element;
// }
// // document.body.appendChild(component());
//
// let element = component();//当print.js改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);
//
// if(module.hot){
//     module.hot.accept('./print.js',function () {
//         console.log('Accepting the updated pringtMe module!');
//         // printMe();
//         document.body.removeChild(element);
//         element = component();//重新渲染页面后，component更新click事件处理
//         document.body.appendChild(element);
//     })
// }

//代码分离
//  async function getComponent(){
//     // return import(/* webpackChunkName: "lodash" */ 'lodash').then(_=>{
//     //     var element = document.createElement('div');
//     //
//     //     element.innerHTML = _.join('Hello ','Webpack!',' ');
//     //
//     //     return element;
//     // }).catch(error=>'An error occurred while loading this component!');
//      var element = document.createElement('div');
//        const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
//
//        element.innerHTML = _.join(['Hello ', 'webpack!'], ' ');
//
//        return element;
// }
// getComponent().then(component=>{
//     document.body.appendChild(component)
// })

//懒加载
// import _ from 'lodash';
//
// function component() {
//     var element = document.createElement('div');
//     var button = document.createElement('button');
//     var br = document.createElement('br');
//
//     button.innerHTML = 'Click me and look at the console!';
//     element.innerHTML=_.join(['Hello','webpack'],' ');
//     element.appendChild(br);
//     element.appendChild(button);
//     button.onclick = e =>import(/*webpackChunckName:"print"*/'./print').then(module=>{
//         var print = module.default;
//
//         print();
//     });
//     return element;
// }
// document.body.appendChild(component());


//缓存 --模块标识符
import _ from 'lodash';
// import Print from './print';

function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello','webpack'],' ');
    // element.onclick = Print.bind(null,'Hello webpack');
    return element;
}
document.body.appendChild(component());