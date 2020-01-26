document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	let items;
	if (localStorage.getItem('items') === null) {
					items = [];
					localStorage.setItem('items', JSON.stringify(items));
					}
			let dataSYS;
			let dataDIA;
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
                datasets: [{
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
                    yAxes: [{
                        ticks: {
                            min: 50,
                            max: 200,
                            stepSize: 25
                        }
                    }]
                }
            }
        });

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
					pSYS.innerText = '';
					pSYS.className = 'grey-text text-lighten-3';
			}

			if (avgDIA > 0 && avgDIA <= 90) {
					pDIA.className = 'green-text';
			} else if (avgDIA >= 91 && avgDIA <= 109) {
					pDIA.className = 'orange-text';
			} else if (avgDIA > 110) {
					pDIA.className = 'red-text';
			} else {
					pDIA.innerText = '';
					pDIA.className = 'grey-text text-lighten-3';
			}
	}



	displayItems();
	newData();
	// getAvg();
	// chart.update();

	// CREATE OBJECTS
	function Item(nos, sys, dia) {
		this.nos = nos;
		this.sys = sys;
		this.dia = dia;
	}

	let nos = 1;
	function UI() {}
	// =======================================
	// CREATE EVENT LISTENERS
	document.getElementById('form-list').addEventListener('submit', function(e) {
		e.preventDefault();
		const sys = document.getElementById('sys').value;
		// const name2 = name.toUpperCase();
		const dia = document.getElementById('dia').value;
		// const price2 = Number(price).toFixed(2);
		const item = new Item(nos, sys, dia);
		const ui = new UI();
		if (sys === '' || dia === '') {
			ui.showAlert('NO DATA!', 'alert animated bounceInDown z-depth-2');
		} else {
			const list = document.getElementById('item-list');
			const row = document.createElement('tr');
			row.innerHTML += `
					<td>${nos}</td>
					<td>${sys}</td>
					<td>${dia}</td>
					<td><a href="#" class="delete">x</a></td>
					`;
			nos += 1;
			list.appendChild(row);
			ui.showAlert('ADDED', 'alert animated bounceInDown z-depth-2');
			clearInputs();
			storeItems(item);
			newData();
			getAvg();
		}
	});

	// delete list item
	document.getElementById('item-list').addEventListener('click', function(e) {
		const ui = new UI();
		deleteBook(e.target);
		ui.showAlert('DELETED', 'alert animated bounceInDown z-depth-2');
		// removeTaskFromLocalStorage();
		newData();
		getAvg();
		e.preventDefault();
	});

	// ============================================

	// CREATE PROTOYPES
	// ALERTS
	UI.prototype.showAlert = function(message, className) {
		const div = document.createElement('div');
		div.className = `${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.container');
		const form = document.getElementById('form');
		container.insertBefore(div, form);
		setTimeout(function() {
			document.querySelector('.alert').remove();
		}, 2000);
	};

	// DELETE ITEM
	// function deleteBook(e){
	// 	if(e.target.parentElement.classList. contains('delete-item')){
	// 		if(confirm('Are you sure?')){
	// 		 e.target.parentElement.parentElement.remove();
	// 			removeTaskFromLocalStorage(e.target.parentElement.parentElement);
	// 	 }
	// 	}
	// }
	function deleteBook(e) {
		if (e.classList.contains('delete')) {
			e.parentElement.parentElement.remove();
			removeTaskFromLocalStorage(e);
		}
	}

	// DELETE FROM STORAGE
	function removeTaskFromLocalStorage(taskItem) {
		// console.log(taskItem.parentElement.parentElement.firstElementChild);
		let items;
		if (localStorage.getItem('items') === null) {
			items = [];
		} else {
			items = JSON.parse(localStorage.getItem('items'));
		}
		items.forEach(function(item, index) {
			// console.log(item.nos);

			if (
				taskItem.parentElement.parentElement.firstElementChild.textContent ==
				item.nos
			) {
				items.splice(index, 1);
			}
		});
		localStorage.setItem('items', JSON.stringify(items));
	}

	// ===========================================
	// CREATE FUNCTIONS

	// LOCAL STORAGE
	function storeItems(item) {
		let items;
		if (localStorage.getItem('items') === null) {
			items = [];
		} else {
			items = JSON.parse(localStorage.getItem('items'));
		}
		items.push(item);
		localStorage.setItem('items', JSON.stringify(items));
	}
	function clearInputs() {
		document.getElementById('sys').value = '';
		document.getElementById('dia').value = '';
	}

	// DISPLAY ITEMS IN STORAGE
	function displayItems() {
		let items;
		if (localStorage.getItem('items') === null) {
			items = [];
		} else {
			items = JSON.parse(localStorage.getItem('items'));
		}
		items.forEach(function(item) {
			const list = document.getElementById('item-list');
			const row = document.createElement('tr');
			row.innerHTML += `
		<td>${item.nos}</td>
    <td>${item.sys}</td> 
    <td>${item.dia}</td>
    <td><a href="#" class="delete">x</a></td>
    `;
			list.appendChild(row);
		});
	}
getAvg();
	// Set AdMobAds options:
	admob.setOptions({
		publisherId: 'ca-app-pub-8816517022745547/1947432293', // Required
		// interstitialAdId:     "ca-app-pub-XXXXXXXXXXXXXXXX/IIIIIIIIII",  // Optional
		// tappxIdiOS: 'pub-51726-ios-1608', // Optional
		// tappxShare: 0.5 // Optional
	});

	admob.createBannerView();
}
