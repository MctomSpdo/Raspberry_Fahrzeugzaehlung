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
    data: [15, 9, 4, 3, 19, 27, 33],
  }]
};


chart(data1);

setTimeout( ()=> {
  chart(data2);
 }, 2000)




function chart(data) {
  i++;
  let d = new Date();
  let n = d.toLocaleTimeString();
 

 

  let config = {
    type: 'line',
    data,
    options: {}
  };
  
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