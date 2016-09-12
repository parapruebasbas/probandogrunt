$(function() {
	
// CALCULADORA
	numo = $("#num");
	$('#num').on("click", function(){$('#num').text("");}); // limpiar visor
	
	// Las funciones que se ejecutan de seguido sin guardar en memoria 
	$('#cuadra').on("click", function(){
		numo.text(+numo.text() * +numo.text());
	});
	$('#invers').on("click", function(){
		numo.text(1 / +numo.text());
	});
	$('#raizcu').on("click", function(){
		numo.text(Math.sqrt(+numo.text()));
	});
	$('#entera').on("click", function(){
		if (numo.text >= "0") {+numo.text(Math.abs(Math.floor(+numo.text())));}
		if (numo.text < "0") {+numo.text(Math.abs(Math.ceil(+numo.text())));}
	});
	$('#pote').on("click", function(){
		numo.text(Math.pow(2,(+numo.text())));
	});
	$('#facto').on("click", function(){
		var x = numo.text()
		var total = x--;
		while (x !== 0){
			total = total * x--;
		}
		numo.text(total);
	});
	
	// Las funciones que guardan en memoria
	$('#divide').on("click", function(){
		memo = $('#num').text();
		acc = "/";
	});
	$('#multip').on("click", function(){
		memo = $('#num').text();
		acc = "*";
	});
	$('#exp').on("click", function(){
		memo = $('#num').text();
		acc = "exp";
	});
	$('#menos').on("click", function(){
		memo = $('#num').text();
		acc = "-";
	});
	$('#mas').on("click", function(){
		memo = $('#num').text();
		acc = "+";
	});

	// Las funciones de cálculo para las funciones de memoria
	$('#calcular').on("click", function() {
		if (acc === "/") {
			numo.text(+memo / +numo.text());
		}
		if (acc === "*") {
			numo.text(+memo * +numo.text());
		}
		if (acc === "exp") {
			numo.text(Math.pow(+memo, +numo.text()));
		}
		if (acc === "-") {
			numo.text(+memo - +numo.text());
		}
		if (acc === "+") {
			numo.text(+memo + +numo.text());
		}
	});

	// Las funciones con n operandos separados por comas
	$('#sumatorio').on("click", function() {
		var arrayval = numo.text().split(",");
		var cont = 0;
		var total = 0;
		while(cont < arrayval.length){
			total += +arrayval[cont++];
		}
		numo.text(total);
	});
		$('#producto').on("click", function() {
		var arrayval = numo.text().split(",");
		var cont = 0;
		var total = 1;
		while(cont < arrayval.length){
			total = total * +arrayval[cont++];
		}
		numo.text(total);
	});

// MEMORIA EXTERNA
	$('#mem').on("click", function(){$('#mem').text("");}); // limpiar visor
	$('#tomemo').on("click", function(){
		valor = $("#num").text();
    	$("#mem").text(valor);
	});
	$('#frommemo').on("click", function(){
		valor = $("#mem").text();
		$("#num").text(valor);
	});

// ARRASTRAR Y SOLTAR
	// de la memoria a la calculadora
	$("#mem").draggable({
		revert: "invalid",
		helper: "clone",
		drag: function(event,ui) {
			$("#num").addClass("aca");
		},
		stop: function (event,ui) {
			$("#num").removeClass("aca");
		}
	});
	$("#num").droppable({
		drop:function(event, ui){
			valor = $("#mem").text();
			$("#num").text(valor);
		}
	});
	// de la calculadora a la memoria
	$("#num").draggable({
		revert: "invalid",
		helper: "clone",
		drag: function(event,ui) {
			$("#mem").addClass("aca");
		},
		stop: function (event,ui) {
			$("#mem").removeClass("aca");
		}
	});
	$("#mem").droppable({
		drop:function(event, ui){
			valor = $("#num").text();
    		$("#mem").text(valor);
		}
	});
});


	