import { getBrowser, getState } from './functions/browser'
import { updateVideo, disableVideo } from './classes/video'
import Keyboard from './classes/keyboard'
import Player from './classes/player'
import NewPlayer from './classes/newPlayer'

const videoElement = document.getElementsByClassName ('video-stream html5-main-video')[0]
// const volumeElement = document.getElementsByClassName ('ytp-time-display notranslate')[0]
const keyboard = new Keyboard (document)
// const player = new Player (volumeElement)
const playerBottomDiv = document.getElementsByClassName ('ytp-chrome-controls')[0]
const player = new NewPlayer (playerBottomDiv)

player.init ()

keyboard.init ()

// player.init ()

const setEvents = () => {

    getBrowser ().storage.onChanged.addListener ((changes) => {

        // runtime
        switch (changes.isActive.newValue) {

            case true:
                updateVideo (videoElement, changes.speed.newValue)

                player.update (changes.speed.newValue)

                break

            default:
                disableVideo (videoElement)
        
        }

        // first run
        if (changes.speed.newValue !== changes.speed.oldValue && changes.isActive.newValue === true) {

            updateVideo (videoElement, changes.speed.newValue)

            player.update (changes.speed.newValue)
        
        }
        
    })

}

const init = async () => {

    const storage = await getState ()

    // init
    if (storage.isActive) {

        updateVideo (videoElement, storage.speed)

        player.update (storage.speed)

    }

    setEvents ()

}

videoElement.oncanplay = () => {
            
    // eslint-disable-next-line no-console
    console.log ('screwmycode for YouTube started')
            
    init ()
            
}