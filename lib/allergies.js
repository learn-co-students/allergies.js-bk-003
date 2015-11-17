'use strict';

function Allergies(allergenIndex) {
	this.allergenIndex = allergenIndex;
};

Allergies.prototype.list = function() {
	var allergenIndex = this.allergenIndex;
	var allergies_arr = [];

	while (allergenIndex > 0){
		switch (true){
			case (allergenIndex >= 128):
			allergies_arr.push("cats");
			allergenIndex -= 128;
			break;
			case (allergenIndex >=64):
			allergies_arr.push("pollen");
			allergenIndex -= 64;
			break;
			case (allergenIndex >=32):
			allergies_arr.push("chocolate");
			allergenIndex -= 32;
			break;
			case (allergenIndex >=16):
			allergies_arr.push("tomatoes");
			allergenIndex -= 16;
			break;
			case (allergenIndex >=8):
			allergies_arr.push("strawberries");
			allergenIndex -= 8;
			break;
			case (allergenIndex >=4):
			allergies_arr.push("shellfish");
			allergenIndex -= 4;
			break;
			case (allergenIndex >=2):
			allergies_arr.push("peanuts");
			allergenIndex -= 2;
			break;
			case (allergenIndex >=1):
			allergies_arr.push("eggs");
			allergenIndex -= 1;
			break;
		}
	}
	allergies_arr.reverse();
	return delete_dups_array(allergies_arr);
};

Allergies.prototype.allergicTo = function(item) {
	var list = this.list();

	if(list.indexOf(item) != -1){
		return true;
	}
	else
		return false;
};

function delete_dups_array (array) {
	//array.sort();
	var arr2 = []
	var i = 0;
	var j = 1;
	while(i < array.length){
		if (array[i] == array[j]) {
			i++; j++;
		} else{
			arr2.push(array[i]);
			i++; j++;
		};
	}
	return arr2
}