  const labels = [
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
  const data = {
    labels: labels,
    datasets: [{
      label: 'Auto',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },{
        label: 'LKW ',
        backgroundColor: 'rgb(30,30,30)',
        borderColor: 'rgb(30, 30, 30)',
        data: [10, 9, 4, 3, 19, 27, 33],
      }]
  };
  const config = {
    type: 'line',
    data,
    options: {}
  };
   // === include 'setup' then 'config' above ===

   var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );