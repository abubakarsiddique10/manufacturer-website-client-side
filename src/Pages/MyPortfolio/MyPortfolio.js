import React from "react";
const MyPortfolio = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 gap-5">
                    <div>
                        <h1 className="text-3xl font-bold">About Me</h1>
                        <p className="text-lg font-medium">Hi! My name is Muhammad Abu Bakar. I am Frontend Developer, and I'm very passionate and dedicated to my work. My goal is to become a skilled web developer. I work ten to twelve hours a day to achieve my goals
                            I will continue to work like this till I reach my goal inshallah. My Email: <a href="">abubakarsiddique7912@gmail.com</a></p>
                    </div>
                    <div className="text-lg font-medium">
                        <h1 className="text-3xl text-bold mb-2"> My Skills</h1>
                        <h5>HTML5</h5>
                        <h5>CS3</h5>
                        <h5>TAILWIND</h5>
                        <h5>BOOTSRAP</h5>
                        <h5>JAVASCRIPT</h5>
                        <h5>REACT JS</h5>
                        <h5>NODE JS</h5>
                    </div>
                    <div>
                        <h1 className="text-3xl text-bold">My Projects Link</h1>
                        <a className="text-xl font-medium" href="https://web-education-990a6.web.app/">Web Education</a><br />
                        <a className="text-xl font-medium" href="https://phone-corner-e38c5.web.app/">Phone Corner</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MyPortfolio;