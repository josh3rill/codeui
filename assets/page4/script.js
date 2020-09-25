console.clear();
const $ = (elem) => {
  return document.querySelector(elem);
}

//====== start headFunction ======//
const headFunctions = (()=> {
  
  //photo decs
  const photo = $('header .photo-con');
  const photoOverlay = $('header .photo-con .overlay');
  
  //person menu decs
  const personMenu = $('header .person-menu');
  const menuBtn = document.querySelectorAll('header .person-menu button');
  
  photo.addEventListener('click', function(){ 
    TweenMax.set(menuBtn[0], {x: '-50%'});
    TweenMax.set(menuBtn[1], {x: '-50%'});
    TweenMax.set(menuBtn[2], {x: '-50%'});
    TweenMax.fromTo(personMenu, 1, { height: '0px' }, { height: '75px' } ); 
    TweenMax.fromTo(photoOverlay, 1, {y: '100%'}, {y: '0%'});
    TweenMax.fromTo(menuBtn[0], 0.3, {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'}).delay(1); 
    TweenMax.fromTo(menuBtn[1], 0.3, {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'}).delay(1.3); 
    TweenMax.fromTo(menuBtn[2], 0.3, {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%'}).delay(1.6); 
  });
        
  const post = $('.content-view .post');
  post.style.height =  '0';
  const showMorePost = $('.content-view .post-footer .show-more');
  const gradientLimit = $('.content-view .post .gradient-limit');
  
  showMorePost.addEventListener('click', function(){
    TweenMax.from(post, 1,{height: '0'}); 
    TweenMax.to(post, 1, {height: 'auto'}); //figure out why this is snapping
    TweenMax.fromTo(gradientLimit, 1, {opacity: 1}, {opacity: 0}); 
  });
   
})();
// END HEADFUNCTION