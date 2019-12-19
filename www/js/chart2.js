
	function newData() {
		// get items from storage
		let items = JSON.parse(localStorage.getItem('items'));

		// convert items to array
		let dataSYS = Object.keys(items).map(i => items[i].sys);
		let dataDIA = Object.keys(items).map(i => items[i].dia);
		// chart.data.datasets[0].data = dataSYS;
		chart.data.datasets[0].data = dataSYS;
		// chart.data.datasets[1].data = dataDIA;
		chart.data.datasets[1].data = dataDIA;
		chart.update();
	}

	function getAvg() {
		// get items from storage
		let items = JSON.parse(localStorage.getItem('items'));

		// select the DOM elements to put result values in
		let pSYS = document.getElementById('total1');
		let pDIA = document.getElementById('total2');

		// convert items to array
		let dataSYS = Object.keys(items).map(i => items[i].sys);
		let dataDIA = Object.keys(items).map(i => items[i].dia);

		// get totals of array and calculate average
		let totalSYS = 0;
		let totalDIA = 0;
		for (let i = 0; i < dataSYS.length; i++) {
			totalSYS += Number(dataSYS[i]);
			totalDIA += Number(dataDIA[i]);
		}
		let avgSYS = Math.floor(totalSYS / dataSYS.length);
		let avgDIA = Math.floor(totalDIA / dataSYS.length);
		pSYS.innerText = avgSYS;
		pDIA.innerText = avgDIA;

		// color the avg values green, orange or red
		if (avgSYS > 0 && avgSYS <= 140) {
			pSYS.className = 'green-text';
		} else if (avgSYS >= 141 && avgSYS <= 189) {
			pSYS.className = 'orange-text';
		} else if (avgSYS > 190) {
			pSYS.className = 'red-text';
		} else {
			pSYS.innerText = 'NO DATA';
			pSYS.className = 'grey-text text-lighten-3';
		}

		if (avgDIA > 0 && avgDIA <= 90) {
			pDIA.className = 'green-text';
		} else if (avgDIA >= 91 && avgDIA <= 109) {
			pDIA.className = 'orange-text';
		} else if (avgDIA > 110) {
			pDIA.className = 'red-text';
		} else {
			pDIA.innerText = 'NO DATA';
			pDIA.className = 'grey-text text-lighten-3';
		}
	}
	// get items from storage
	let items = JSON.parse(localStorage.getItem('items'));

	// select the DOM elements to put result values in
	let pSYS = document.getElementById('total1');
	let pDIA = document.getElementById('total2');

	// convert items to array
	let dataSYS = Object.keys(items).map(i => items[i].sys);
	let dataDIA = Object.keys(items).map(i => items[i].dia);

	// get totals of array and calculate average
	let totalSYS = 0;
	let totalDIA = 0;
	for (let i = 0; i < dataSYS.length; i++) {
		totalSYS += Number(dataSYS[i]);
		totalDIA += Number(dataDIA[i]);
	}
	let avgSYS = Math.floor(totalSYS / dataSYS.length);
	let avgDIA = Math.floor(totalDIA / dataSYS.length);
	pSYS.innerText = avgSYS;
	pDIA.innerText = avgDIA;

	// color the avg values green, orange or red
	if (avgSYS > 0 && avgSYS <= 140) {
		pSYS.className = 'green-text';
	} else if (avgSYS >= 141 && avgSYS <= 189) {
		pSYS.className = 'orange-text';
	} else if (avgSYS > 190) {
		pSYS.className = 'red-text';
	} else {
		pSYS.innerText = 'NO DATA';
		pSYS.className = 'grey-text text-lighten-3';
	}

	if (avgDIA > 0 && avgDIA <= 90) {
		pDIA.className = 'green-text';
	} else if (avgDIA >= 91 && avgDIA <= 109) {
		pDIA.className = 'orange-text';
	} else if (avgDIA > 110) {
		pDIA.className = 'red-text';
	} else {
		pDIA.innerText = 'NO DATA';
		pDIA.className = 'grey-text text-lighten-3';
	}

	// chart =================
	var ctx = document.getElementById('myChart').getContext('2d');

	var chart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [
				'1',
				'2',
				'3',
				'4',
				'5',
				'6',
				'7',
				'8',
				'9',
				'10',
				'11',
				'12',
				'13',
				'14'
			],
			datasets: [
				{
					label: 'SYS',
					data: dataSYS,
					backgroundColor: [
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)',
						'RGBA(97, 125, 138, 0.95)'
					],
					borderColor: [
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)'
					],
					borderWidth: 1
				},
				{
					label: 'DIA',
					data: dataDIA,
					backgroundColor: [
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)',
						'RGBA(252, 236, 84, 0.95)'
					],
					borderColor: [
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)',
						'rgba(0, 0, 0, 0.3)'
					],
					borderWidth: 1
				}
			]
		},
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							min: 50,
							max: 200,
							stepSize: 25
						}
					}
				]
			}
		}
	});
