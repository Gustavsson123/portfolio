(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),i=(t(13),t(1)),c=t(2),o=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"/",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"#",alt:"Profile pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfStart," ",e.YearOfStart," - ",e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",{className:"infoLinks"},l.a.createElement("a",{href:"".concat(e.link)},e.Achievements))))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfStart," ",e.YearOfStart," - ",e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",{className:"infoLinks"},e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e,a){return l.a.createElement("div",{className:"columns portfolio-item",key:a},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"".concat(e.imgurl),alt:"images of projects",className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("blockquote",null,l.a.createElement("img",{src:"".concat(e.description),alt:"cert"}),l.a.createElement("cite",null,l.a.createElement("a",{href:e.link},"Microsoft Technology Associate ",l.a.createElement("br",null)," Introduction to Programming Using Python"))))})))," ")," "),"  ")}}]),a}(n.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"If you want to get in touch with me, feel free to send me an email."))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Mail: ",l.a.createElement("a",{href:"mailto:ville.gust@gmail.com"},e.gmail))))))}}]),a}(n.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),N={imagebaseurl:"https://gustavsson123.github.io/portfolio/",name:"Vilhelm Gustavsson",role:"Software development student",gmail:"ville.gust@gmail.com",skypeid:"Your skypeid",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies, just relax or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/vilhelm-gustavsson-a90b77236/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/Gustavsson123",className:"fa fa-github"}],aboutme:" My name is Vilhelm Gustavsson and I am a software development student from Sweden. During my passed three years in school I have primarly worked on project using programming languages such as python, html, css and javascript. I am currently studying a fourth year of high school at NTI where I get to work on projects in groups using Scrum.",address:"Sweden",website:"https://gustavsson123.github.io/portfolio/",education:[{UniversityName:"NTI Gymnasiet Uppsala",specialization:"High School Software Engineer",MonthOfStart:"Aug",YearOfStart:"2022",MonthOfPassing:"Ongoing",YearOfPassing:"",Achievements:"Link to the program",link:"https://www.ntigymnasiet.se/program/mjukvarudesign/uppsala/"},{UniversityName:"NTI Gymnasiet Uppsala",specialization:"High School Infromation Technology Program",MonthOfStart:"Aug",YearOfStart:"2019",MonthOfPassing:"Jun",YearOfPassing:"2022",Achievements:"Link to the program",link:"https://www.ntigymnasiet.se/program/informations-och-medieteknik/uppsala/"}],work:[{CompanyName:"STUNS",specialization:"Developer",MonthOfStart:"Feb",YearOfStart:"2022",MonthOfLeaving:"Apr",YearOfLeaving:"2022",Achievements:"Internship for my education"}],skillsDescription:"My skills are: ",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"React"},{skillname:"TailwindCSS"},{skillname:"Javascript"},{skillname:"Python"},{skillname:"Selenium"},{skillname:"MySQL"},{skillname:"MongoDB"}],portfolio:[{name:"Florist Bl\xe5klinten",description:"This project was made for a made up Florist company. It was made with HTML, CSS and JavaScript.",imgurl:"images/portfolio/project1.png",link:"https://ntig-uppsala.github.io/florist-blaklinten/"},{name:"Pizzeria Raffiki",description:"This project was made for a made up Pizzeria. It was made with HTML, CSS and JavaScript.",imgurl:"images/portfolio/project2.png",link:"https://ntig-uppsala.github.io/pizzeria-rafiki/"},{name:"Admin N\xe4rvaro",description:"This project is made for NTI Uppsala. It was made with NextJS, TaildwindCSS, express and MongoDB.",imgurl:"images/portfolio/project3.png",link:"https://narvaro.ntig.net/"},{name:"POS project",description:"This project is made based on real POS systems. It was made with C#, .NET and the framework WinForms.",imgurl:"images/portfolio/project4.png",link:"https://github.com/NTIG-Uppsala/hotell-kassasystem"},{name:"Stuns Maps Project",description:"This project is made for STUNS. It was made with NextJS with typescript and a MySQL database.",imgurl:"images/portfolio/project5.png",link:"https://maps.stuns.se/"}],testimonials:[{description:"images/portfolio/cert.png",link:"https://www.credly.com/badges/b4bb2aa5-18fe-4597-8c2f-5468da354551/public_url"}]},k=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:N}),l.a.createElement(h,{resumeData:N}),l.a.createElement(d,{resumeData:N}),l.a.createElement(E,{resumeData:N}),l.a.createElement(f,{resumeData:N}),l.a.createElement(g,{resumeData:N}),l.a.createElement(v,{resumeData:N}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.4de25515.chunk.js.map