'use strict';

function Allergies(allergenIndex) {

  this.index = allergenIndex

  this.allergies = [ ['cats' ,128],['pollen', 64],['chocolate', 32],['tomatoes', 16],['strawberries', 8],['shellfish', 4], ['peanuts', 2],['eggs', 1] ]
};


Allergies.prototype.list = function() {
	var num = this.index
	var array = []

    for (var i=0; i<this.allergies.length; i++) {
  		
  		while (num >= this.allergies[i][1]) {
  			num = num-this.allergies[i][1]
  			if (array.indexOf(this.allergies[i][0])<0) {
  				array.push(this.allergies[i][0])
  			};
  	  	}
    }

   	return array.reverse()
};


Allergies.prototype.allergicTo = function(allergen) {
	var e 
	this.list().indexOf(allergen) > -1 ? e = true : e =  false
	return e
};

