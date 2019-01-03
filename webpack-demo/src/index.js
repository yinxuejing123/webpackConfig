import _ from 'lodash';
import './style.css';
import MyImage from './timg.jpg';
import Data from './data.xml';

function component(){
    var element = document.createElement('div')
//    Lodash, now imported by this script
    element.innerHTML = _.join(['Hello','webpack'],'');
    element.classList.add('hello');

    //图片添加到创建出来的原有div上
    var myImage = new Image();
    myImage.src = MyImage;
    element.appendChild(myImage);

    console.log(Data)
    return element;
}
document.body.appendChild(component());