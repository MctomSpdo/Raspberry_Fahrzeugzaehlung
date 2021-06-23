//Fetch zum Empfangen der gezählten Daten

fetch('http://localhost:3000/')
.then ((response) =>{
  return response.json();
})
.then((data)=>{
  console.log(data);
})
.catch((error) =>{
  console.log('Error:', error);
})

 //Versuch einer Datumsanzeige
 /*let date = new Date();
 let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
*/

//Zeitspanne

let i = 0;

let labels = [
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17.00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
  '24:00',
];

//Variablen für die Charts
let data1 = {
  labels: labels,
  datasets: [{
    label: 'Auto',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }, {
    label: 'LKW ',
    backgroundColor: 'rgb(30,30,30)',
    borderColor: 'rgb(30, 30, 30)',
    data: [15, 9, 4, 3, 19, 27, 33],
  }]
};

let data2 = {
  labels: labels,
  datasets: [{
    label: 'Auto',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }, {
    label: 'LKW ',
    backgroundColor: 'rgb(30,30,30)',
    borderColor: 'rgb(30, 30, 30)',
    data: [15, 9, 45, 3, 19, 27, 33],
  }]
};
let data3 = {
  labels: labels,
  datasets: [{
    label: 'Auto',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }, {
    label: 'LKW ',
    backgroundColor: 'rgb(30,30,30)',
    borderColor: 'rgb(30, 30, 30)',
    data: [15, 9, 40, 30, 19, 27, 33],
  }]
};
let data4 = {
  labels: labels,
  datasets: [{
    label: 'Auto',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }, {
    label: 'LKW ',
    backgroundColor: 'rgb(30,30,30)',
    borderColor: 'rgb(30, 30, 30)',
    data: [15, 90, 40, 3, 19, 27, 33],
  }]
};
let data5 = {
  labels: labels,
  datasets: [{
    label: 'Auto',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }, {
    label: 'LKW ',
    backgroundColor: 'rgb(30,30,30)',
    borderColor: 'rgb(30, 30, 30)',
    data: [15, 9, 4, 30, 19, 27, 33],
  }]
};
let data6 = {
  labels: labels,
  datasets: [{
    label: 'Auto',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }, {
    label: 'LKW ',
    backgroundColor: 'rgb(30,30,30)',
    borderColor: 'rgb(30, 30, 30)',
    data: [15, 9, 40, 3, 19, 27, 33],
  }]
};
let data7 = {
  labels: labels,
  datasets: [{
    label: 'Auto',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }, {
    label: 'LKW ',
    backgroundColor: 'rgb(30,30,30)',
    borderColor: 'rgb(30, 30, 30)',
    data: [15, 90, 4, 3, 19, 27, 33],
  }]
};

//Verzögertes Laden der Charts
chart(data1);

setTimeout( ()=> {
  chart(data2);
 }, 1000)
 setTimeout( ()=> {
  chart(data3);
 }, 2000)
 setTimeout( ()=> {
  chart(data4);
 }, 3000)
 setTimeout( ()=> {
  chart(data5);
 }, 4000)
 setTimeout( ()=> {
  chart(data6);
 }, 5000)
 setTimeout( ()=> {
  chart(data7);
 }, 6000)




function chart(data) {
  i++;
  let d = new Date();
  let n = d.toLocaleTimeString();
 

 

  let config = {
    type: 'line',
    data,
    
      };
      
  

 //Verusch einer Datumsanzeige

  //document.getElementsByClassName(`date${i}`).innerHTML += `${day} ${month} ${year}`;
  //document.getElementsByClassName(`date${i}`).style.color = "#ff0000";

   document.getElementById(i).innerHTML += `<canvas id="myChart${i}"></canvas>`;
   

   console.log(i);
   console.log(document.getElementById(`myChart${i}`))
  

   setTimeout( ()=> {
    new Chart(
      document.getElementById(`myChart${i}`),
      config
   );
   }, 500)
  

 
} 