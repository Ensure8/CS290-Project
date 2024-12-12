function HomePage(){
    return (
        <>
            <h2>Welcome to my website!</h2>
            <article>
                <h3>Career Goals</h3>
                <p>
                    My career goals are to eventually work with a video game company or a defense contractor. As one of my main hobbies is to play video games, I would want to create something big with a well known video game developer.
                </p>

                <h3>About This App</h3>
                <p>
                    For this website, several different technologies were used to make it functional, stylistic, and dynamic.
                </p>
                <dl>
                    <dt><strong>HTML</strong></dt>
                    <dd>Hyper Text Markup Language was used to build the user interface and frontend of the website in order to provide an intuitive and interactive experience to the user.</dd>
                    <dt><strong>CSS</strong></dt>
                    <dd>Cascading Stylesheets was used in this website in order to style and structure the user interface by giving different property values for the elements and widgets shown.</dd>
                    <dt><strong>Javascript</strong></dt>
                    <dd>Javascript was used to create interactive web pages and to give dynamic funcitonality to the website. This gave users a more fluid experience when interacting with it.</dd>
                    <dt><strong>Node.js</strong></dt>
                    <dd>Node.js was used to run Javascript in the back-end to allow for asynchronous communication between the browser client and the express server.</dd>
                    <dt><strong>Express</strong></dt>
                    <dd>Express was a Node.js framework used to create and run a server in order to handle HTTP requests and responses through an endpoint routing system.</dd>
                    <dt><strong>React</strong></dt>
                    <dd>React was a Javascript library used to serve the website as a single page application by using reusable code "components" to handle UI logic, manage states (data), and optimize the rendering of webpages.</dd>
                    <dt><strong>MongoDB</strong></dt>
                    <dd>MongoDB was a non-relation NoSQL database used for storing data through "documents" in a JSON-like format. In this case, game documents containing information about the title, installment, and publish date was stored.</dd>
                </dl>
            </article>
        </>
    )
}
export default HomePage;