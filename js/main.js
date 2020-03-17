$(function(){
    $('.open_btn-menu').on('click', function(){
        $('.menu').addClass('active');
    })
    $('.menu_btn').on('click', function(){
        $('.menu').removeClass('active');
    })

    $(window).on('scroll', function(){
        if($(this).scrollTop() > 100){
            $('.open, .open_btn-menu').addClass('active');
        }else{
            $('.open, .open_btn-menu').removeClass('active');
        }
    })

    function slider(set){
        let btn_left = set.querySelector('.posts_btn-left');
        let btn_right = set.querySelector('.posts_btn-right');
        let items = set.querySelectorAll('.posts_items-article');
        let i = 0;
        
        btn_left.addEventListener('click', function(){
            items[i].classList.remove('active');
            i--;
            if(i < 0) {i = items.length - 1}
            items[i].classList.add('active');
        })
        btn_right.addEventListener('click', function(){
            items[i].classList.remove('active');
            i++;
            if(i >  items.length - 1) {i = 0}
            items[i].classList.add('active');
        })
    }
    let sliders = document.querySelectorAll('.posts');
    for (let item of sliders) {
        new slider(item);
	}
	
	$('.tab').on('click', function(e){
		e.preventDefault();
		$('.tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.portfolio_tabs-content').removeClass('active').eq($(this).index()).addClass('active');
	})










})