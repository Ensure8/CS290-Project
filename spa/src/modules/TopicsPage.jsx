function TopicsPage(){
    return (
        <>
            <h2>Web Dev Concepts</h2>
            <nav className="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#optImages">Optimized Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#cascadingStylesheets">Cascading Stylesheets</a>
            </nav>

            <article id="webServers">
                <h3>Web Servers</h3>
                <p>{/*Explain the concept of a designated home page and how its name relates to different servers and languages.*/}
                    When it comes to the homepage, most web servers tend to set and configure a file called index.html in the <strong>root directory</strong> of the server. When a user visits the website and makes a GET request to the root URL, index.html is returned. This allows the web application to have a default webpage as a starting point for when a user visits the site. Server programs like Apache can also have different index files and may look for them written in different programming languages like PHP or JavaScript.
                </p>

                <p>{/*Explain what can be seen in the browser's Web Dev/Inspector Network tab output screen (use the concepts provided in the Exploration). What is different about the file's details when viewed from the web server versus the local computer?*/}
                    When viewing the Network tab of the index file on the OSU web server, different information shows for the General, Response, and Request headers. Unlike the local index file, when sending a GET request for it on the OSU web server, a new general header showed up, called remote address, which indicated the server's public IP address to which the request was sent. Under the Response Headers, information such as the age and date of the response showed up, as well as when the resource was last modified and what server application was handling requests. For the Request Headers, information such as that about one's own browser and operating system showed up, as well as the host of the web server, the language supported by the browser, and the URL making the current request.
                </p>

                <p>{/*Explain why the favicon.ico file has a status 200, but the main.css and main.js files have a status 404 (or 400, if that is what you see).*/}
                    When accessing the webpage, the favicon.ico file showed a status code of 200 under the Inspector Network tab because the GET request method for it was successful. On the other hand, the files “main.css” and “main.js” showed a status code of 404 under the Network tab because these resources weren't found on the server. Even though we have code in our HTML file to reference both of these files, they do not exist.
                </p>

                <p>{/*Explain the parts of your web server's URL. What are the scheme, the subdomains, the host domain, and the resources?*/}
                    For my web server URL, the first part includes the <strong>HTTPS scheme</strong>, which allows the browser-client and the server to have secure request and response interactions for the specific hyper-text resource. Since the HTTPS protocol is being used here, the default <strong>port</strong> will also be 443. The second part of my URL includes the <strong>subdomains</strong> “web.engr” as they act as a way to structure the website in a more hierarchical order. The third part is the domain name, which consists of the <strong>domain</strong> and the <strong>extension</strong> “oregonstate.edu”. This must then be mapped to its IP address by a DNS server in order for our web client to establish a TCP/IP connection with OSU's web server. The last part of my URL is the <strong>resource path</strong>, which includes the path of folders in hierarchical order, from “~guardadd” to “a1-guardadd”. The response from the server then leads to the contents of the index file being displayed.
                </p>
            </article>

            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>{/*The concept of frontend design, in a <p> paragraph.*/}
                    <strong>Frontend design</strong> is about creating a positive and engaging experience for users. A well-designed frontend for a web application includes the design of the page, a graphical user interface, and the overall interactive experience. The visual design will consist of important elements such as colors, fonts, media, and icons in order to create an aesthetically pleasing visual. These features can help applications maintain consistent color schemes, typography, and imagery, giving them an identity of their own. <strong>Colors</strong> and <strong>fonts</strong> can be used to convey clear and readable text while creating a visual hierarchy. <strong>Media</strong>, such as videos and images, can be used to add visual interest, while <strong>icons</strong> will simplify navigation and provide visual cues for user interactions. By combining these features with a responsive and accessible GUI and an intuitive navigation system, a frontend designer can create both a visually appealing and user-friendly interface that encourages users to engage and interact with a web application.
                </p>

                <dl>{/*The five "E"s of usability, in a <dl> definition list that separates the topics and descriptions.*/}
                    <dt><strong>Effective</strong></dt>
                    <dd>
                        Effectiveness is about how users connect to a product or service and how they become motivated to keep using it to achieve their goals. If users are able to complete tasks without encountering obstacles, the product can be considered effective.
                    </dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>
                        Efficiency is about the speed and simplicity through which a user can complete a task using a service. Reducing the number of steps and the time it takes to complete a task makes a product efficient. In the case of web applications, this can be changed by improving navigation through clearer instructions and reduced mouse clicks. 
                    </dd>
                    <dt><strong>Enjoyable</strong></dt>
                    <dd>
                        Enjoyment refers to the connection a user will have with a product. If the service provided is engaging, satisfactory, or motivates the users to continue using it, then it is enjoyable. For web applications, enjoyment can be affected by a number of factors, such as a visually appealing user interface, clear and concise feedback, or any other feature that encourages interaction by the user.
                    </dd>
                    <dt><strong>Easy to Learn and Navigate</strong></dt>
                    <dd>
                        Learning ease refers to how easily a user can learn and understand a product without becoming frustrated or overwhelmed. For a web service to become easy to learn, it will need to have a clean interface with simple but logical layouts. It will also need to have clear instructions and consistent navigation, and it must give proper feedback when appropriate.
                    </dd>
                    <dt><strong>Error-Free</strong></dt>
                    <dd>
                        Error prevention is about the ability of a service or product to avoid errors when in use. Proper precautions like anticipating potential errors and providing workarounds is a good case of error-prevention. For web applications, they can achieve this by providing clear instructions, validating user inputs, and giving users feedback when errors happen.
                    </dd>
                </dl>

                <p>{/*The purpose of each of the page layout tags, in a <p> paragraph. Focus on the 6 we use in this assignment.*/}
                    <strong>Page layout tags</strong> are types of block-level elements that are used for breaking up content into sections while providing structure to them. They help readers and crawler-robots understand which areas of the webpage includes what content. Six important layout elements include: &lt;header&gt;, &lt;main&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, and &lt;footer&gt;. The <strong>header</strong> element is used for denoting the banner or masthead for a webpage and typically includes a name, publisher, or marketing slogan. A <strong>navigation</strong> element is a block that can include a set of different links in order to take users from the current page to another one. The <strong>main</strong> element signifies the primary block where all the content will be, such as stories, galleries, or tutorials. The <strong>section</strong> element helps group content thematically, as well as to classify related content. The <strong>article</strong> element is typically used inside section elements in order to denote a specific topic with a second-level heading. Lastly, the <strong>footer</strong> element goes below the main tag and is used for holding legal information, contact information, and links to other important pages. It can also be used for copyright statements, which can be the website owner's name, publication year, and a copyright symbol.
                </p>

                <ol>{/*How anchors link to external content, internal content, and from page-to-page, written in an <ol> ordered list. Focus on the concepts from the Explorations.*/}
                    <li>
                        For external content through hyperlinks, the opening tag of an anchor element needs to have the “href” attribute and must be assigned a specific URL. This, along with a descriptive text between the opening and closing tags of the anchor element, should be used to let one know where it takes them when clicked on.
                    </li>
                    <li>
                        For internal content, anchor elements allow a text or component to link to a section of a page using <strong>IDs</strong>. The element in which to anchor to must have an ID attribute with a specific value assigned to it. The anchor element must then prepend a pound symbol to this value and assign that to the “href” attribute in the opening tag of the anchor element.
                    </li>
                    <li>
                        For page-to-page navigation, an anchor element should have the “href” attribute assigned the absolute or relative path of a URL. For relative paths, the “href” value should be a file name if it's in the same directory as the index file. If the file is in a child directory, the value must have the directory name with a forward slash where the file name is appended to the end. If the file exists in a parent directory, two dots and a forward slash can be prepended onto the file name, where each ancestor folder level increases the dot count by two.
                    </li>
                </ol>
            </article>

            <article id="optImages">
                <h3>Optimized Images</h3>
                <p>{/*Name and explain the purpose of the 6 major image optimizing specifications.*/}
                    Optimizing images for online viewing is essential for providing a smooth user experience. Since the main goal is to reduce the time it takes to render those images, certain techniques can be used to also save bandwidth and storage space. This can happen by reducing their <strong>size</strong>, <strong>dimensions</strong>, and <strong>resolution</strong>. Other specifications would also include giving <strong>descriptive file names</strong>, setting correct <strong>file formats</strong>, and correcting <strong>color mode</strong>. For example, by giving descriptive file names, it can help users and search engines identify and categorize the content of an image. It will also help provide context to users for when it fails to load or if there are accessibility issues. Reducing the file size, the resolution, and giving exact dimensions will help improve how long image loading times will be. For the web, this is essential, as <strong>compressing</strong> and displaying them correctly will help avoid unnecessary usage of bandwidth, space, and rendering, leading to improved performance for images of high quality. Correcting file formats is also just as important, as it will impact the appearance, efficiency, and use of an image. <strong>JPEG</strong>, <strong>PNG</strong>, <strong>WebP</strong>, <strong>GIF</strong>, and <strong>SVG</strong> are some examples of different file formats that images can be saved as. Lastly, an image can be enhanced by the color mode setting that it's set to, such as RGB, CMYK, hexadecimal, or names. For frontend designers, names are 256 predefined HTML colors and hexadecimals can be at most 2-digit values, giving over 256^3 colors. RGB can also give this quantity of colors through varying values of red, green, and blue, while HSL values can be used to change the hue, saturation, and luminosity of an image. All these color modes are common, and depending on how they're used, they can help prevent color shifts and inaccuracies within an image.                    
                </p>

                <p>{/*Name and explain the file formats appropriate for photos and for line art?*/}
                    For photos, the most appropriate file formats are JPEG, PNG, and WebP. JPEG is good for photos of high quality with a small file size, while WebP offers better <strong>lossy</strong> and <strong>lossless</strong> compression, resulting in faster load times. For line art, preferred formats are SVG, PNG, and GIF. SVG can be used for scaling images without losing quality, while GIF is used mostly for those that contain simple colors and animations. PNG can be used for both photos and line art, as it supports <strong>transparency</strong> and lossless compression.
                </p>
            </article>
                
            <article id="favicons">
                <h3>Favicons</h3>
                <p>{/*How do browsers and devices use favicons?*/}
                    Browsers and devices can use <strong>favicons</strong> to identify themselves, assuming they meet proper image specifications. They can also be used in many other ways, such as in browser tabs, bookmarks, and address bars, where they have to be of the correct file size and format, such as ICO, PNG, SVG, or GIF. With proper usage of favicons, it can help users recognize certain apps and websites without much visual effort.
                </p>
            </article>

            <article id="cascadingStylesheets">
                <h3>Cascading Stylesheets</h3>
                <p>
                    Incorporating <strong>stylesheets</strong> into websites and apps can help enhance the overall user experience. By redefining the structure, content, and components of a webpage, it can improve usability by making it easier for users to navigate and interact with the site. Stylesheets can improve readability by providing different font sizes, colors, and spacing, making text more accessible to people. They can also help reinforce a brand's image by maintaining a consistent visual identity across a website or app. By using stylesheets, they can give developers the flexibility to customize and personalize the frontend of a service to meet the needs and preferences of different users. 
                </p>

                <p>
                    There are five main ways to incorporate styles into a website or application. In web development, one way is to use <strong>external CSS rules</strong> like the &lt;link&gt; tag in HTML to reference a stylesheet in the main head area. The second way is to import an external CSS file using the &lt;import&gt; tag. These two ways are preferred as they allow developers to maintain a modular architecture in an application, allowing reusable code when necessary. Three other ways of incorporating styles would be to <strong>embed CSS code</strong> within an HTML file. This would include putting CSS information within two &lt;style&gt; tags, lining CSS properties and values within HTML tags, or using JavaScript to manipulate the <strong>Document Object Model</strong> and its tags in order to update the styles. These methods are typically just for one-off style changes, though.
                </p>
            </article>
        </>
    )
}

export default TopicsPage