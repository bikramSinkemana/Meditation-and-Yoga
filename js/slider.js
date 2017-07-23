
function Slider(elementId) {
    var that = this;
    var width=1920;
    var element = document.getElementById(elementId);


   this.intervalId2;
    this.marginLeft = 0;

    this.init = function () {
        this.slide();
    }


    this.slide = function () {
        clearInterval(this.intervalId2);


        that.intervalId2 = setInterval(function () {
            console.log('element.style.marginLeft')
            element.style.marginLeft = that.marginLeft+'px';
            if (that.marginLeft%width==0&&that.marginLeft!=-width*4) {
                setTimeout(function () {
                    that.marginLeft-=5;
                    that.slide;

                }, 1000);


            }else if(that.marginLeft==-width*4){

                that.marginLeft=0;
            }else{
                that.marginLeft-=5;
            }
        }, 1000 / 60);



    }

    this.stop = function () {

        console.log('>>>>>>>>>>>>>>>');


        // clearInterval(that.intervalId2);
        setTimeout(function () {
            that.marginLeft-=5;
            that.slide();
        }, 100);




    }



}

var slider = new Slider('slider');
slider.init();



