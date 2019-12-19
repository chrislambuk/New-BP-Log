document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	displayItems();
	newData();
	getAvg();
	chart.update();

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

	// Set AdMobAds options:
	admob.setOptions({
		publisherId: 'ca-app-pub-8816517022745547/1947432293', // Required
		// interstitialAdId:     "ca-app-pub-XXXXXXXXXXXXXXXX/IIIIIIIIII",  // Optional
		tappxIdiOS: 'pub-51294-ios-3317', // Optional
		tappxShare: 0.5 // Optional
	});

	admob.createBannerView();
}
