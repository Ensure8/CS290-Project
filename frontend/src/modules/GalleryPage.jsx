function GalleryPage(){
    const images = [
        {
            filepath: '/src/assets/rome-photo-buildings.jpg',
            alt: "Photo covering buildings and trees in Rome.",
            caption: 'Photo I took when I first visited Rome.',
            title: "&copy; 2024 Daniel Guardado"
        },
        {
            filepath: '/src/assets/mausoleum-of-hadrian.jpg',
            alt: "Mausoleum of Hadrian.",
            caption: 'Photo of the Mausoleum of Hadrian from my visit to Rome.',
            title: "&copy; 2024 Daniel Guardado"
        },
        {
            filepath: '/src/assets/rome-statue-of-augustus.jpg',
            alt: "Statue of Augustus.",
            caption: 'Sculpture of Augustus Caesar.',
            title: "&copy; 2024 Daniel Guardado"
        },
        {
            filepath: '/src/assets/vatican-city.jpg',
            alt: "Vatican City.",
            caption: 'A picture of the Vatican City up close.',
            title: "&copy; 2024 Daniel Guardado"
        },
        {
            filepath: '/src/assets/haskell-project-omok-game.png',
            alt: "Omok game being played with two players.",
            caption: 'Project from a past CS course where I had to implement the two-player Omok board game in Haskell.',
            title: "&copy; 2024 Daniel Guardado"
        },
        {
            filepath: '/src/assets/hobby-video-games.jpg',
            alt: "Two video games about pokemon and zelda.",
            caption: 'Playing video games is one of my hobbies.',
            title: "&copy; 2024 Daniel Guardado"
        }        
    ]

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
                            <img src={image.filepath} alt={image.alt} title={image.title} />
                            <figcaption>{image.caption}</figcaption>
                        </figure>
                    )
                }
            </article>
        </>
    )
}
export default GalleryPage;