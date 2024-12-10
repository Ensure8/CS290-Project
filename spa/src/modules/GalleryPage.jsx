import rome from '../assets/rome-photo-buildings.jpg'
import hadrian from '../assets/mausoleum-of-hadrian.jpg'
import augustus from '../assets/rome-statue-of-augustus.jpg'
import vatican from '../assets/vatican-city.jpg'
import haskell from '../assets/haskell-project-omok-game.png'
import game from '../assets/hobby-video-games.jpg'

function GalleryPage(){
    const images = [rome, hadrian, augustus, vatican, haskell, game];

    return (
        <>
            <h2>Gallery</h2>
            <p>
                This gallery shows places I've been to, as well as my projects and hobbies.
            </p>
            <article className="gallery">
                {
                    images.map((image) => 
                        <figure>
                            <img src={image} alt="" title="" />
                        </figure>
                    )
                }
            </article>
        </>
    )
}
export default GalleryPage;