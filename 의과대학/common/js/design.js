
var custom = custom || {};

custom = {

  common : function(){

    // scrollEvt
    var $window = $(window),
    $body = $("body");

    $window.on("scroll", function(){
        var _scrollTop = $(this).scrollTop();

        if(_scrollTop > 55){
            $body.attr("data-scroll", "down");
            $(' body ').addClass(' body_scroll ');   


        }else{
            $body.attr("data-scroll", "up");
            $(' body ').removeClass(' body_scroll ');
        }
    });


    // topBtn
    $(function(){
      $( window ).scroll( function() {

        if ( $( this ).scrollTop() > 500 ) {
          $('#topBtn').fadeIn();
        } else {
          $('#topBtn').fadeOut();
        }

      });
  
      $('#topBtn').on('click', function () {
        $( 'html, body' ).animate( { scrollTop : 0 }, 500 );
        return false;
      });
    });
    
  },

  resizeSet : function(){
    
    var $window = $(window),
    $html = $('html'),
    $body = $('body'),
    $scrollTop = $(this).scrollTop();

    sitemapSet();

    // set sitemap
    function sitemapSet() {
      if ($window.width() > 1160) {

        $(" #sitemap ").removeClass(" mo_sideGnb_w ").addClass(' sitemap_w ');   
        $(" #sitemap > div ").removeClass(" mo_sideGnb ").addClass(' sitemap ');   

      } 

      if ($window.width() <= 1160) {

        $(" #sitemap ").removeClass(" sitemap_w ").addClass(' mo_sideGnb_w ');   
        $(" #sitemap > div ").removeClass(" sitemap ").addClass(' mo_sideGnb ');   

      };

    };


    function resize() {

      if ($window.width() > 1160) {

        $(" #sitemap.mo_sideGnb_w ").hide().parents(' body ').removeClass(' smap ');   
  
      } 
      else if ($window.width() <= 1160) {
        $(" .wrapper ").removeClass(" gnb_open ");        

        $(" #sitemap.sitemap_w ").hide().parents(' body ').removeClass(' smap ');   
    
      };

      sitemapSet();


    };


    $window.resize(resize).trigger('resize');
    

  },



  hdSearch : function(){

    $(' #header .iconBtn_sch ').click(function(){ 
      $( this ).toggleClass(' ac ');        
      $(' .hd_sch_box_w ').toggle().toggleClass(' ac ');
      $( this ).attr('title', '통합검색 닫기').find(' span ').html('통합검색 닫기');

      if (!$(' .hd_sch_box_w ').is(":visible")) {
        $(' #header .iconBtn_sch ').removeClass('ac');
        $(' .hd_sch_box_w ').removeClass(' ac ');
        $( this ).attr('title', '통합검색 열기').find(' span ').html('통합검색 열기');
      };

      $(' .tg_w ').find(' .tg_btn ').removeClass(' ac ').siblings(' .tg_cnt ').slideUp();

    });

    $(' .hd_sch_box_bg ').click(function(){ 
      $(' .hd_sch_box_w' ).hide().removeClass('ac');
      $(' #header .iconBtn_sch  ').removeClass('ac').attr('title', '통합검색 열기').find(' span ').html('통합검색 열기');
    });
    


    
    /*
    $(' #header .hd_sideBtn_sch ').on('focusout', function () {

      window.setTimeout(function() {           
        $(' #header .hd_sideBtn_sch ').removeClass(' ac ');        
        $(' #header .hd_sideBtn_sch .hd_sch_box ').slideUp('fast');
      }, 2000);

    });
    */

  },

  // gnb js
  gnb : function(){

    $( ' ul.gnb_menu2_list li ' ).has( 'ul' ).addClass( 'depth' );

    $('#gnb > li > a').on('mouseenter', function () {      

      $( this ).parent(' li ').addClass('ac').siblings().removeClass('ac').find(' .gnb_dep2_w ').hide();
      $( this ).siblings(' .gnb_dep2_w ').show();
      $(' .wrapper ').addClass(' gnb_open ');

      $(' .tg_w ').find(' .tg_btn ').removeClass(' ac ').siblings(' .tg_cnt ').hide();
      $(' .lnb_list ').find(' li ').removeClass(' ac ').find(' .lnb_depth2_list ').slideUp();

    });

    $('#gnb > li > a').on('focus', function () {      
      $( this ).parent(' li ').addClass('focus').siblings().removeClass('focus');
    });

    $('#gnb > li > a').on('keydown', function ( evt ) {            

      if( evt.keyCode == 13 ){
        $( this ).parent(' li ').toggleClass('ac').siblings().removeClass('ac').find(' .gnb_dep2_w ').hide();
        $( this ).siblings(' .gnb_dep2_w ').toggle();
        $(' .wrapper ').toggleClass(' gnb_open ');

        if ($( this ).find(' .gnb_dep2_w ').is(":visible")) {
          $( this ).addClass(' ac ');
          $(' .wrapper ').addClass(' gnb_open ');
        };

      };

      $(' #gnb > li ').each(function () {
        if($(this).hasClass('ac')){
          $(this).children(' .gnb_dep2_w ').show();
        } else {
          $(this).children(' .gnb_dep2_w ').hide();
        };
      });
      
    });

    $('.gnb_menu3_list > li > a').on('click', function () {            
      $( this ).parent(' li ').toggleClass('ac').siblings().removeClass('ac').find(' .gnb_menu4_list ').hide();
      $( this ).siblings(' .gnb_menu4_list ').toggle();

      $('.gnb_menu3_list > li ').each(function () {
        if($(this).hasClass('ac')){
          $(this).children(' .gnb_menu4_list ').show();
        } else {
          $(this).children(' .gnb_menu4_list ').hide();
        }
      });
    });

    $('.hd_box02').on('mouseleave', function () {            
      $( this ).find(' li ').removeClass('ac focus').find(' .gnb_dep2_w ').hide();
      $(' .wrapper ').removeClass(' gnb_open ');

    });

    $('.hd_side_util3').first().on('mouseenter', function () {       
      $(' .wrapper ').removeClass(' gnb_open');  
      $( '#gnb li ').removeClass('ac focus').find(' .gnb_dep2_w ').hide();
    });

  },

  // lnb js
  lnb : function(){
    
    $(' .lnb_list .depth1 ').on({ "click" : function(){
      var $depth2 = $(this).siblings(' ul ');      

      $( this ).parents(' li ').siblings(' li ').removeClass(' ac ').find(' .lnb_depth2_list ').slideUp('fast');      
      $( this ).parents(' li ').toggleClass(' ac ').find(' .lnb_depth2_list ').slideToggle( "fast" ); 
      if (!$( $depth2 ).is(":visible")) {
        $( this ).parents(' li ').removeClass('ac');
      };

      }
    });    
    
  },

  sitemap : function(){

    $(' #header .iconBtn_sitemap  ').click (function(){  
      $(' body ').addClass(' smap ');
      $(' #sitemap ').fadeIn();
    });

    $(' #header .iconBtn_mMenu  ').click (function(){  
      $(' body ').addClass(' smap ');
      $(' #sitemap ').fadeIn();
    });

    $(' #sitemap .btn_ico.ico_close  ').click (function(){  
      $(' body ').removeClass(' smap ');
      $(' #sitemap ').fadeOut();
    });


    $(' #mo_gnb dl > dt ').on('click', function () {       
      $(this).closest('li').addClass('ac').find(' dd ').show();
      $(this).closest('li').siblings('li').removeClass('ac').find(' dd ').hide();
  
      $(' #mo_gnb > li ').each(function () {
        if($(this).hasClass('ac')){
          $(this).find(' dd ').show();
        } else {
          $(this).find(' dd ').hide();
        }
      });
    });

    $(' #mo_gnb .depth > a ').on('click', function () {       
      $(this).closest('li').toggleClass('ac').children(' ul ').slideToggle('fast');
      $(this).closest('li').siblings('li').removeClass('ac').find(' ul ').slideUp();
  
      $(' #mo_gnb li ').each(function () {
        if($(this).hasClass('ac')){
          $(this).children(' ul ').show();
        } else {
          $(this).children(' ul ').slideUp('fast').find('li').removeClass('ac');
        }
      });
    });


  },

  popup : function(){
    

  },

  // toggle js
  toggleCnt : function(){

    $(' .tg_btn ').click (function(){  
      $(' .tg_btn ').not( this ).removeClass(' ac ').parents(' .tg_w ').find(' .tg_cnt ').slideUp('fast');
      $( this ).toggleClass(' ac ').parents('.tg_w').find(' .tg_cnt ').slideToggle( "fast" );
    });


  },
  

  faq : function(){

    $(' .faq_list dt a').click (function(){  
      var $dt = $( this ).parent(' dt ');
      var $dd = $( $dt ).next(' dd ');
      var $dds = $( this ).parent(' dt ').siblings(' dd ').not( $dd );

      $( $dds ).slideUp(' fast ');
      $( $dt ).toggleClass(' ac ').next(' dd ').slideToggle().siblings().not( $dt ).removeClass(' ac ');      

      if($(' .faq_list dt ').hasClass(' ac ')){
        $( this ).next(' dd ').show();
      }else{
        $( this ).next(' dd ').hide();
      }

    });


    $(' .tg_list dt a').click (function(){  
      var $dt = $( this ).parent(' dt ');
      var $dd = $( $dt ).next(' dd ');
      var $dds = $( this ).parent(' dt ').siblings(' dd ').not( $dd );

      $( $dds ).slideUp(' fast ');
      $( $dt ).toggleClass(' ac ').next(' dd ').slideToggle().siblings().not( $dt ).removeClass(' ac ');      

      if($(' .tg_list dt ').hasClass(' ac ')){
        $( this ).next(' dd ').show();
      }else{
        $( this ).next(' dd ').hide();
      }

    });

  },


  //tab js 
  tab : function(){

    $(' .tab_w .tab_tit_list a ').on({ "click" : function(){
      var $acTab = $(this).attr("href"); 
      
      $( this ).parents('.tab_w').find('.tab_cnt > div').hide(); 		
      $( this ).parent(' li ').addClass('ac').siblings('li').removeClass('ac');
      $( $acTab ).show();
      return false;	
      }
    });   

    $(' .tab_h a ').on({ "click" : function(){
      var $acTab = $(this).attr("href"); 
      
      $( this ).parents('.tab_w').find('.tab_cnt ').hide(); 		
      $( this ).parent(' li ').addClass('ac').siblings('li').removeClass('ac');
      $( $acTab ).show();
      return false;	
      }
    });   

  },


  


  init : function(){
    custom.common();  
    custom.resizeSet(); 
    custom.hdSearch();
    custom.gnb();
    custom.lnb();
    custom.sitemap(); 
    custom.popup();
    custom.toggleCnt();
    custom.faq();
    custom.tab();
  }

};


$(document).ready(function () {		
  
  $(' body  ').addClass(' on ');
	
  custom.init();

  var winW = $(window).width();
  var winH = $(window).height();
  var hdH = $(' .header ').height();
  var ftH = $(' .footer ').height();
  var visH = $(' .visual_w ').height();
  
  $(' .content_w  ').css({
    'min-height' : winH - hdH - ftH - 1
  });


  
});



