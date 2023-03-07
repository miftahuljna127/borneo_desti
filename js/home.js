$('.page-scroll').on('click', function(){

	//ambil isi href
	var tujuan = $('page-scroll').attr('href');

	//tangkap element ybs
	var elemenTujuan = $(tujuan);
	console.log(elemenTujuan);

	//pindahkan scroll
	//$('body').animate({
//		scrollTop: elemenTujuan.offset().top - 50
//	}, 1250);

//	e.preventDefault();

});