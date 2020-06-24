import Slider from './slider'

export default class NewPlayer {

    constructor (parent) {

        this.parent = parent

        this.sliderChild = null

        this.sliderParams = {
            'off': '0',
            'on': '200px',
        }

        // this.init ()
    
    }

    update (p) {

        this.sliderChild.update (p)
    
    }

    setEvents () {
        // TODO
    }

    input () {

        // <input class="slider" type="range" min="0.5" max="1.5" step="0.001" value="1"></input>

        const input = document.createElement ('input')

        input.classList.add ('slider')

        input.type = 'range'

        input.min = 0.5

        input.max = 1.5

        input.step = 0.001

        input.value = 1

        input.innerHTML = 'test'

        this.sliderChild = new Slider (input)

        return input
    
    }

    svg () {
        
    }

    init () {
        
        const span = document.createElement ('span')

        span.id = 'screw-player-span'

        const button = document.createElement ('button')

        button.id = 'screw-player-button'

        button.className = 'ytp-button'

        button.style = 'margin-right: 0;'

        span.appendChild (button)

        const svg = document.createElementNS ('http://www.w3.org/2000/svg', 'svg')

        svg.setAttribute ('width', '100%')

        svg.setAttribute ('height', '100%')

        svg.setAttribute ('version', '1.1')

        svg.setAttribute ('viewBox', '0 0 24 24')

        button.appendChild (svg)

        const path = document.createElementNS ('http://www.w3.org/2000/svg', 'path')

        path.setAttributeNS (null, 'd', 'M7.5 14.5c-1.58 0-2.903 1.06-3.337 2.5H2v2h2.163c.434 1.44 1.757 2.5 3.337 2.5s2.903-1.06 3.337-2.5H22v-2H10.837c-.434-1.44-1.757-2.5-3.337-2.5zm0 5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5S9 17.173 9 18s-.673 1.5-1.5 1.5zm9-11c-1.58 0-2.903 1.06-3.337 2.5H2v2h11.163c.434 1.44 1.757 2.5 3.337 2.5s2.903-1.06 3.337-2.5H22v-2h-2.163c-.434-1.44-1.757-2.5-3.337-2.5zm0 5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5s1.5.673 1.5 1.5s-.673 1.5-1.5 1.5z')

        path.setAttributeNS (null, 'fill', '#FFFFFF')

        svg.appendChild (path)

        const path2 = document.createElementNS ('http://www.w3.org/2000/svg', 'path')

        path2.setAttributeNS (null, 'd', 'M12.837 5C12.403 3.56 11.08 2.5 9.5 2.5S6.597 3.56 6.163 5H2v2h4.163C6.597 8.44 7.92 9.5 9.5 9.5s2.903-1.06 3.337-2.5h9.288V5h-9.288zM9.5 7.5C8.673 7.5 8 6.827 8 6s.673-1.5 1.5-1.5S11 5.173 11 6s-.673 1.5-1.5 1.5z')

        path2.setAttributeNS (null, 'fill', '#FFFFFF')

        svg.appendChild (path2)

        const slider = document.createElement ('div')

        slider.id = 'screw-player-slider'

        slider.style = `width: ${this.sliderParams.off};`

        span.appendChild (slider)
        
        // --------------------------------------

        button.addEventListener ('mouseover', () => {

            button.style = 'margin-right: 3px;'

            slider.style = `width: ${this.sliderParams.on};`

            button.removeEventListener ('mouseover')

        })

        this.parent.addEventListener ('mouseout', (event) => {
            
            const e = event.relatedTarget.className

            // console.log (e)

            if (
                e !== 'style-scope ytd-watch-flexy'
                && e !== 'ytp-progress-bar-padding'
                && e !== 'ytp-progress-list'
                && e !== 'video-stream html5-main-video'
            ) return

            button.style = 'margin-right: 0;'

            slider.style = `width: ${this.sliderParams.off};`

            span.removeEventListener ('mouseout')
        
        })

        // --------------------------------------
        
        // this.child = new Player (slider)

        // this.child.init ()

        const sliderChild = this.input ()

        slider.appendChild (sliderChild)

        // console.log (child)

        // --------------------------------------

        // this.parent.insertBefore (span, this.parent)
        this.parent.appendChild (span)
        
        // console.log ('span', span.children[0])

        // console.log ('volume', this.parent.children[0])
    
    }

}