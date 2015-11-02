(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
		this.tab = 1;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Alguna descripcion aqui Dodecahedron',
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Alguna descripcion aqui Pentagonal Gem',
			canPurchase: false,
			soldOut: false
		}
	];
})();
