import _ from 'lodash';
import './index.css';
// import Icon from './about.png';
import data from './data.json'
import printMe from './print.js'

function component() {
  var element = document.createElement('div');

  // Lodash，现在由此脚本导入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

   // 将图像添加到我们现有的 div。
  //  var myIcon = new Image();
  //  myIcon.src = Icon;

  // element.appendChild(myIcon);

  var element_p = document.createElement('p');
  element_p.innerHTML = JSON.stringify(data)

  var btn = document.createElement('button')
  btn.innerHTML = 'click me and check the console'
  btn.onclick = printMe

  element.appendChild(element_p)
  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());