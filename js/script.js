/*
==========================
******** dropMenu*********
==========================
*/
let avatar = document.querySelector(".avatr");
let notification = document.querySelector(".notification");
dropMenu(avatar)
dropMenu(notification)
function dropMenu(selector){
  selector.addEventListener("click",()=>{
    let dropdownMenu =selector.querySelector(".dropdown-menu")
  dropdownMenu.classList.contains("active") ? dropdownMenu.classList.remove("active") : dropdownMenu.classList.add("active");
  })
}
/*
==========================
******** side Bar ********
==========================
*/
let bars = document.querySelector(".bars");
let sidebar = document.querySelector(".sidebar");
bars.addEventListener("click",()=>{
  sidebar.classList.toggle("active");
})
/*
============================
******** Apexcharts ********
============================
*/
let Visitors = [800,320, 190, 250, 400,600],
    Hired = [502,203,70,200,350,400], 
    years = [2015,2016,2017,2018,2019,2020] ;
var options = {
  chart: {
    type: 'area',
    height: '100%',
    width: '100%',
  },
  series: [{
    type: 'area',
    name :"visitors",
    data: Visitors
  }, {
    type: 'area',
    name :"Hired",
    data: Hired
  }],
  xaxis: {
    categories: [...years]
  },
  colors:['#43a047', '#e65245', '#e43a15']
}
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
/*
============================
******** dark mode *********
============================
*/
let mode = document.querySelector(".mode");
mode.addEventListener("click",()=>{
  if(document.body.classList.contains("dark"))
  {
    document.body.classList.remove("dark");
    mode.querySelector("i").classList.replace("fa-sun","fa-moon")
  }
  else
  {
    document.body.classList.add("dark");
    mode.querySelector("i").classList.replace("fa-moon","fa-sun")
  }
})

window.matchMedia("(max-width : 768px)").matches ? sidebar.classList.remove("active") : sidebar.classList.add("active");