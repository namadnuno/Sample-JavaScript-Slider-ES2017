
export default class Slider {
    constructor (params) {
        this.nextButton = params.nextButton;
        this.previousButton = params.previousButton;
        this.currentSlider = 1;
        this.eachItemClass = params.eachItemClass ? params.eachItemClass : 'slider--item';
        this.sliderID = params.sliderID;
        this.dotClass = params.dotClass;
        this.duration = 
            params.duration ? params.duration : 5000;

        this.addClassOnCurrent = 
        params.addClassOnCurrent ? params.addClassOnCurrent : 'current';
        this.addClassOnPrevious = 
        params.addClassOnPrevious ? params.addClassOnPrevious : 'previous';
        this.totalSliders = 
        $('#' + this.sliderID + ' .' + this.eachItemClass).length;
        
        this.sliders = $('#' + this.sliderID + ' .' + this.eachItemClass);
        
        this.updateSliders()

        $('.' + this.previousButton).on('click', () => {
            this.previous();
        })
        $('.' + this.nextButton).on('click', () => {
            this.next();
        });

        var this2 = this;
        $('.slider--dot').on('click', function() {
            this2.currentSlider = $(this).attr('data-target');
            this2.updateSliders();
        });

        this.makeInterval();
    }
    
    makeInterval () {
        this.interval = setInterval(() => {
            this.next();
        }, this.duration);
    }

    previous () {
        this.currentSlider = this.currentSlider == 1 ? this.totalSliders : (this.currentSlider - 1)
        this.updateSliders()
    }

    next () {
        this.currentSlider = this.currentSlider == this.totalSliders ? 1 : (this.currentSlider + 1)
        this.updateSliders()
    }

    updateSliders() {
        let previous = this.currentSlider == 1 ? this.totalSliders : (this.currentSlider - 1);
      
        clearInterval(this.interval);
        this.makeInterval();
      
        this.sliders.map((index, item) => {
            $(item).removeClass(this.addClassOnCurrent)
            $(item).removeClass(this.addClassOnPrevious)
            $('.' + this.dotClass + (index + 1))
            .find('.bollet')
            .removeClass('active')
            
            if ((index + 1) == previous) {
                $(item).addClass(this.addClassOnPrevious)
            }

            if ((index + 1) == this.currentSlider) {
                $(item).addClass(this.addClassOnCurrent)
                $('.' +this.dotClass + (index + 1))
                .find('.bollet')
                .addClass('active')
            }
        })
    }
}
