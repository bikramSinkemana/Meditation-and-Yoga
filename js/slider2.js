
function Slider(elementId) {
    var that = this;
    var width=1100;
    var element = document.getElementById(elementId);
    var  backButton =document.getElementById('back-button');
    var fastButton=document.getElementById('fast-button');
    var chooseImage=document.getElementById('first-image');
    var chooseImage2=document.getElementById('second-image');
    var chooseImage3=document.getElementById('third-image');
    var chooseImage4=document.getElementById('fourth-image');
    var chooseImage5=document.getElementById('fifth-image');
    // var chooseImageList=document.getElementByClass('list')[0];
    // var bhitra = chooseImageList.getElementById

    this.intervalId;
    this.intervalId2;
    this.marginLeft = 0;

    // this chai ramrari padha
    this.init = function () {
        this.slide();
         this.indicate();
        // this.addEvents();
        //  this.stop();

    }

    this.addEvents = function () {
        // element.addEventListener('pointerenter', that.stop);
        //element.addEventListener('pointerleave', that.slide);
        backButton.addEventListener('click',that.back);
        fastButton.addEventListener('click',that.fast);
        chooseImage.addEventListener('click',function() {that.imagePosition(1)});
        chooseImage2.addEventListener('click',function() {that.imagePosition(2)});
        chooseImage3.addEventListener('click',function() {that.imagePosition(3)});
        chooseImage4.addEventListener('click',function() {that.imagePosition(4)});
        chooseImage5.addEventListener('click',function() {that.imagePosition(5)});
    }
    this.imagePosition=function(x){
        that.marginLeft=-width*(x-1);
        // if (x==1) {

        //   console.log('i am here');
        //   that.marginLeft=0;
        // }else if (x==2) {
        //   console.log('show second image');
        //   that.marginLeft==-width;
        // }else if (x==3) {
        //   that.marginLeft==-width*2;
        // }else if (x==4) {
        //   that.marginLeft==-width*3;
        // }else if (x==5) {
        //   that.marginLeft==-width*4;
        // }
    }

    this.back=function(){
        if (that.marginLeft<=0&&that.marginLeft>-width) {
            that.marginLeft=-width*4;
        }else if (that.marginLeft==-width||that.marginLeft>-width*2) {
            console.log('i am always here');
            that.marginLeft=0;
        }else  if (that.marginLeft==-width*2||that.marginLeft>-width*3) {
            that.marginLeft=-width;
        }else   if (that.marginLeft==-width*3||that.marginLeft>-width*4) {
            that.marginLeft=-width*2;
        }else  if (that.marginLeft==-width*4||that.marginLeft>-width*5) {
            that.marginLeft=-width*3;
        }

    }
    this.fast=function(){
        if (that.marginLeft==0||that.marginLeft>-width) {
            that.marginLeft=-width;
        }else if (that.marginLeft==-width||that.marginLeft>-width*2) {
            console.log('i am always here');
            that.marginLeft=-width*2;
        }else  if (that.marginLeft==-width*2||that.marginLeft>-width*3) {
            that.marginLeft=-width*3;
        }else   if (that.marginLeft==-width*3||that.marginLeft>-width*4) {
            that.marginLeft=-width*4;
        }else  if (that.marginLeft==-width*4||that.marginLeft>-width*5) {
            that.marginLeft=0;
        }
    }
// this.slideAntidirection=function(){
//   that.intervalId = setInterval(function () {
//       console.log('slideAntidirection');
//       element.style.marginLeft = that.marginLeft;
//       if(that.marginLeft==0){
//       that.slide();
//       }else{
//           that.marginLeft+=10;
//       }
//     }, 1000 / 60);


// }

    this.slide = function () {


        that.intervalId2 = setInterval(function () {
            console.log('element.style.marginLeft')
            element.style.marginLeft = that.marginLeft+'px';


            if (that.marginLeft%width==0&&that.marginLeft!=-width*4) {
                setTimeout(function () {
                    that.marginLeft-=5;


                    that.slide
                }, 1000);

            }else if(that.marginLeft==-width*4){

                that.marginLeft=0;
            }else{
                that.marginLeft-=5
            }
        }, 1000 / 60);



    }
    this.inactive=function(){
        chooseImage.classList.remove("active");
        chooseImage5.classList.remove("active");
        chooseImage2.classList.remove("active");
        chooseImage3.classList.remove("active");
        chooseImage4.classList.remove("active");
        console.log("i should be here");


    }
    this.indicate=function(){
        // clearInterval(that.intervalId);
        that.intervalId=setInterval(function(){


            if (that.marginLeft==0||that.marginLeft>-width) {
                that.inactive();
                chooseImage.classList.add("active");

            }else if (that.marginLeft==-width||that.marginLeft>-width*2) {
                that.inactive();
                chooseImage2.classList.add("active");
            }else  if (that.marginLeft==-width*2||that.marginLeft>-width*3) {
                that.inactive();
                chooseImage3.classList.add("active");
            }else   if (that.marginLeft==-width*3||that.marginLeft>-width*4) {
                that.inactive();
                chooseImage4.classList.add("active");
            }else  if (that.marginLeft==-width*4||that.marginLeft>-width*5) {
                that.inactive();
                chooseImage5.classList.add("active");
            }
        },1000/60)
    }


    this.stop = function () {
        that.intervalId=setInterval(function(){
            console.log('>>>>>>>>>>>>>>>');
            if (that.marginLeft==-2480) {
                clearInterval(that.intervalId2);
                /* setTimeout(function () {
                 that.slide();
                 }, 1000);*/

            }
        })

    }



}

var slider = new Slider('slider2');
slider.init();



