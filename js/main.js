!function(c){var n={};function e(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return c[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=c,e.c=n,e.d=function(c,n,t){e.o(c,n)||Object.defineProperty(c,n,{enumerable:!0,get:t})},e.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},e.t=function(c,n){if(1&n&&(c=e(c)),8&n)return c;if(4&n&&"object"==typeof c&&c&&c.__esModule)return c;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:c}),2&n&&"string"!=typeof c)for(var r in c)e.d(t,r,function(n){return c[n]}.bind(null,r));return t},e.n=function(c){var n=c&&c.__esModule?function(){return c.default}:function(){return c};return e.d(n,"a",n),n},e.o=function(c,n){return Object.prototype.hasOwnProperty.call(c,n)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\nconst list = document.querySelector(\'.container__projects--js\');\r\nconst button = document.querySelector(\'.button__more--js\');\r\n\r\nfetch(\'https://api.github.com/users/piotrn-87/repos?sort=updated&direction=desc\')\r\n  .then(resp => resp.json())\r\n  .then(resp => {\r\n    const repos = resp;\r\n    for (const repository of repos) {\r\n      const {\r\n        name,\r\n        description,\r\n        homepage,\r\n        html_url\r\n      } = repository;\r\n      list.innerHTML +=\r\n        `<li class="project">\r\n          <div class="project__wrapper">\r\n          <img class="project__logo" src="assets/img/github.svg" alt="github image">\r\n          <h3 class="project__name">${name}</h3> \r\n          ${description ? `<p class="project__description">${description}</p>`: \'no description\'\r\n          }\r\n          </div>\r\n          <div class="project__footer">\r\n          ${homepage ? `<a class="project__link" href="${homepage}" target="_blank" title="Demo : ${name}">Demo</a>` : \'\'\r\n          }\r\n          <a class="project__link" href="${html_url}" target="_blank" title="source : ${name}">Github</a>\r\n          </div>\r\n        </li>\r\n        `;\r\n      console.log(name);\r\n      console.log(description);\r\n      console.log(html_url);\r\n      console.log(homepage);\r\n    }\r\n\r\n  })\r\n\r\n  .catch(error => {\r\n    console.log(\'cant find github API\');\r\n  })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSztBQUMzQyxZQUFZLGlEQUFpRCxZQUFZO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQTZDLFNBQVMsa0NBQWtDLEtBQUs7QUFDekc7QUFDQSwyQ0FBMkMsU0FBUyxvQ0FBb0MsS0FBSztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUciLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX3Byb2plY3RzLS1qcycpO1xyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19tb3JlLS1qcycpO1xyXG5cclxuZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvcGlvdHJuLTg3L3JlcG9zP3NvcnQ9dXBkYXRlZCZkaXJlY3Rpb249ZGVzYycpXHJcbiAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcclxuICAudGhlbihyZXNwID0+IHtcclxuICAgIGNvbnN0IHJlcG9zID0gcmVzcDtcclxuICAgIGZvciAoY29uc3QgcmVwb3NpdG9yeSBvZiByZXBvcykge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBob21lcGFnZSxcclxuICAgICAgICBodG1sX3VybFxyXG4gICAgICB9ID0gcmVwb3NpdG9yeTtcclxuICAgICAgbGlzdC5pbm5lckhUTUwgKz1cclxuICAgICAgICBgPGxpIGNsYXNzPVwicHJvamVjdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RfX3dyYXBwZXJcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJwcm9qZWN0X19sb2dvXCIgc3JjPVwiYXNzZXRzL2ltZy9naXRodWIuc3ZnXCIgYWx0PVwiZ2l0aHViIGltYWdlXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJwcm9qZWN0X19uYW1lXCI+JHtuYW1lfTwvaDM+IFxyXG4gICAgICAgICAgJHtkZXNjcmlwdGlvbiA/IGA8cCBjbGFzcz1cInByb2plY3RfX2Rlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+YDogJ25vIGRlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fZm9vdGVyXCI+XHJcbiAgICAgICAgICAke2hvbWVwYWdlID8gYDxhIGNsYXNzPVwicHJvamVjdF9fbGlua1wiIGhyZWY9XCIke2hvbWVwYWdlfVwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiRGVtbyA6ICR7bmFtZX1cIj5EZW1vPC9hPmAgOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJwcm9qZWN0X19saW5rXCIgaHJlZj1cIiR7aHRtbF91cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJzb3VyY2UgOiAke25hbWV9XCI+R2l0aHViPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICBgO1xyXG4gICAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgICAgY29uc29sZS5sb2coZGVzY3JpcHRpb24pO1xyXG4gICAgICBjb25zb2xlLmxvZyhodG1sX3VybCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGhvbWVwYWdlKTtcclxuICAgIH1cclxuXHJcbiAgfSlcclxuXHJcbiAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjYW50IGZpbmQgZ2l0aHViIEFQSScpO1xyXG4gIH0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')}]);