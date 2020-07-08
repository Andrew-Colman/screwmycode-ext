
import rangeMap from '../functions/rangeMap'
import { setState } from '../functions/browser'
import colors from '../config/colors'
import { getRainbow } from '../functions/colors'

export default class Slider {

    constructor (slider, width) {
        
        this.slider = slider

        this.maxWidth = width

        this.setEvents (this.slider)
    
    }

    setEvents (dom) {

        dom.oninput = async (e) => {

            setState ('speed', e.target.value)

        }
    
    }

    enable (value) {

        this.slider.value = value
            
        this.slider.removeAttribute ('disabled')
    
        this.slider.style.setProperty ('--fill-color', getRainbow (value))
    
        this.slider.style.setProperty ('--slider-handle-color', getRainbow (value))
    
    }

    disable () {

        this.slider.value = 1
    
        this.slider.disabled = true

        this.slider.style.setProperty ('--slider-handle-shadow-opacity', 0.2)

        this.slider.style.setProperty ('--slider-handle-color', colors.darker)

        this.slider.style.setProperty ('--slider-fill-padding-right', '0px')
        
        this.slider.style.setProperty ('--slider-fill-border-right', '0px')
        
        this.slider.style.setProperty ('--slider-fill-padding-left', '0px')

        this.slider.style.setProperty ('--slider-fill-border-left', '0px')

    }

    update (value) {

        this.enable (value)
    
        if (value < 1) {

            this.slider.style.setProperty ('--slider-handle-shadow-opacity', rangeMap (value, 1, 0.5, 0.4, 0.8))
    
            this.slider.style.setProperty ('--slider-fill-padding-right', '0px')
                
            this.slider.style.setProperty ('--slider-fill-border-right', '0px')
                
            this.slider.style.setProperty ('--slider-fill-padding-left', rangeMap (value, 1, 0.5, 0, this.maxWidth / 2) + 'px')
    
            this.slider.style.setProperty ('--slider-fill-border-left', '7px')
            
        } else {
    
            this.slider.style.setProperty ('--slider-handle-shadow-opacity', rangeMap (value, 1, 1.5, 0.4, 0.8))
    
            this.slider.style.setProperty ('--slider-fill-padding-left', '0px')
    
            this.slider.style.setProperty ('--slider-fill-border-left', '0px')
            
            this.slider.style.setProperty ('--slider-fill-padding-right', rangeMap (value, 1, 1.5, 0, this.maxWidth / 2) + 'px')
    
            this.slider.style.setProperty ('--slider-fill-border-right', '7px')
                
        }
    
    }

}