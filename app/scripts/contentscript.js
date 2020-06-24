import { getBrowser, getState } from './functions/browser'
import { updateVideo, disableVideo } from './classes/video'
import Keyboard from './classes/keyboard'
// import Player from './classes/player'
import Player from './classes/newPlayer'

// const volumeElement = document.getElementsByClassName ('ytp-time-display notranslate')[0]
const video = document.getElementsByClassName ('video-stream html5-main-video')[0]
const keyboard = new Keyboard (document)
const player = new Player (document.getElementsByClassName ('ytp-chrome-controls')[0])
const isPlayerUpdating = true

keyboard.init ()

player.init ()

const setEvents = () => {

    getBrowser ().storage.onChanged.addListener ((changes) => {

        // runtime
        switch (changes.isActive.newValue) {

            case true:
                updateVideo (video, changes.speed.newValue)

                if (isPlayerUpdating) player.update (changes.speed.newValue)

                break

            default:
                disableVideo (video)
        
        }

        // first run
        if (changes.speed.newValue !== changes.speed.oldValue && changes.isActive.newValue === true) {

            updateVideo (video, changes.speed.newValue)

            if (isPlayerUpdating) player.update (changes.speed.newValue)
        
        }
        
    })

}

const init = async () => {

    const storage = await getState ()

    // init
    if (storage.isActive) {

        updateVideo (video, storage.speed)

        if (isPlayerUpdating) player.update (storage.speed)

    }

    setEvents ()

}

video.oncanplay = () => {
            
    // eslint-disable-next-line no-console
    console.log ('screwmycode for YouTube started')
            
    init ()
            
}