import rangeMap from '../functions/rangeMap'
import { computePercentValue, computeToneValue } from '../functions/indicators'

export default class Indicator {

    constructor (type, indicator) {

        this.type = type

        this.indicator = indicator
    
    }

    update (value) {

        switch (this.type) {

            case 'percent':
                this.indicator.textContent = computePercentValue (value) + ' %'
    
                break
    
            case 'tone':
                this.indicator.textContent = computeToneValue (value) + ' st'
    
                break
    
            default:
                return null
        
        }
    
        if (value === 1) {
    
            this.indicator.style.setProperty ('--indicator-value-color', '#808386')
    
            this.indicator.style.setProperty ('--indicator-value-shadow-opacity', 0.15)
            
        } else {
    
            if (value < 1) {
                
                this.indicator.style.setProperty ('--indicator-value-shadow-opacity', rangeMap (value, 1, 0.5, 0.3, 0.5))
            
            } else {
    
                this.indicator.style.setProperty ('--indicator-value-shadow-opacity', rangeMap (value, 1, 1.5, 0.3, 0.5))
            
            }
    
            this.indicator.style.setProperty ('--indicator-value-color', '#63BCF8')
        
        }
    
    }

}