import * as React from 'react';
import Nav from '../components/Nav.component';
import '../styles/components/contact.scss';

class Contact extends React.Component {    
    render() {
        return (
            <div>
                <Nav></Nav>
                <div className="view-content">
                    <h2>Eric Cavazos</h2>
                    <p><a href="mailto:eric@smartass.io">eric@smartass.io</a></p>
                    <h3 className="m-t-m">Front-End Repo:</h3>
                    <a href="https://github.com/ezos86/sw-battleship-fe">https://github.com/ezos86/sw-battleship-fe</a>
                    <h3 className="m-t-m">Back-End Repo:</h3>
                    <a href="https://github.com/ezos86/sw-battleship-be">https://github.com/ezos86/sw-battleship-be</a>
                    <h3 className="m-t-m">API Url:</h3>
                    <p>https://battleship.smartass.io</p>
                    <h3 className="m-t-m">Summary</h3>
                    <div>
                        <strong><u>Overall:</u></strong>
                    </div>
                    <div>
                        I enjoyed the project, I created the backend using Node, Express, Mocha/Chai (Testing), and connected that to a Postgres database where the tables were made to store the users, games, ships, game progress, game logs. You will find all of this in the zip folder provided. 
                    </div>
                    <div>
                        <br/>
                    </div>
                    <div>
                        <strong><u>Framework &amp; Type</u></strong>
                    </div>
                    <div>
                        I decided to use React and Typescript for the front-end. I have been using Typescript over a
                        year now and at times, it has it’s pains, especially when working with
                        outside dependencies that might cause assignment issues, but overall, it
                        reduces and catches several possible ’type’ mistakes that could happen and
                        adds some points of validation to the code. For better validation on the backend that goes beyond types, but handles data as it travels in from request, Joi can be used. (Req: data) => Joi => Server backend => Joi/Postgres Schema => Database. Validating the data on intake and then on push to database, can prevent DB errors before they happen, which can in return save performance and hits against the DB. (I did not go through the effort to implement in this small app, but if we grew it, I would recommend).
                    </div>
                    <div>
                        <br/>
                    </div>
                    <div>
                        <strong><u>State Management</u></strong>
                    </div>
                    <div>
                        The application has redux connected to work with managing the overall state as someone plays through Star Wars Battle ship games.
                    </div>
                    <div>
                        <strong>
                            <u>
                                <br/>
                            </u>
                        </strong>
                    </div>
                    <div>
                        <strong><u>Folder Layout:</u></strong>
                    </div>
                    <div>
                        I kept a fairly simple folder layout, like many React apps, I separated the
                        components, actions, reducers, styles. I have no real preference, just feel
                        it’s important to be consistent across a team when it comes to folder
                        structure and I think it’s important if changes are made, it’s important to
                        remember to update the web pack or other potential build configurations
                        that might be effected by folder structure changes.
                    </div>
                    <div>
                        <br/>
                    </div>
                    <div>
                        <strong><u>Style Choices:</u></strong>
                    </div>
                    <div>
                        A CSS preprocessor I feel definitely can make things easier. I chose SASS.
                        I have worked with LESS, SASS, Stylus, PostCss before depending on project.
                        One thing I like particular about Sass is the mixins, variables, and
                        imports. I imported Bulma just to get a few quick UI styles for the
                        challenge.
                    </div>
                    <ul>
                        <li>
                            <strong>Base.scss</strong>
                            - file in order to define what might be a Designer’s architecture and
                            standardization. So although we can use Modules CSS and localize the
                            CSS per component, defining a base, helps keeps consistency.
                        </li>
                        <li>
                            <strong>Variables.scss</strong>
                            - Having this file available for any components to use, helps keep
                            branding consistent as a company grows, one designer might have a blue
                            slightly off in hex of rgba values. Therefore the variables can help
                            prevent an incident such as this and helps to ensure brand accuracy.
                        </li>
                    </ul>
                    <div>
                        <br/>
                    </div>
                    <div>
                        <strong><u>Linting</u></strong>
                    </div>
                    <div>
                        I did not follow ilnting rigorously
                    </div>
                    <div>
                        <br/>
                    </div>
                    <div>
                        <strong><u>Testing:</u></strong>
                    </div>
                    <div>
                        I decided to test with Jest. I have added the tests and they can be
                        triggered and run independent from deployment or start process.
                    </div>
                    <div>
                        <br/>
                    </div>
                    <div>
                        <strong><u>Application Growth (Improvements for Scale) Notes</u></strong>
                    </div>
                    <ul>
                        <li>
                            Component Breakdown - Could have made an input list component to pass in the array of body or parameter fields.
                        </li>
                        <li>
                            State - I could clean up some areas where states are handled in components.
                        </li>
                        <li>
                            CSS Module - For this simple application we didn’t really need it, but
                            could have added in CSS module to scope the css per component based on
                            component .scss file.
                        </li>
                        <li>
                            Git Commits - My git commits were not very descriptive since it was
                            just me and short project.
                        </li>
                        <li>
                            Testing - I could have added e2e tests and more tests for the overall application from the backend tests - making unit tests using stubs and sinon. I could have added a few more front-end tests as well. As this is just an exercise, I didn't go all out for the testing, but just demonstrated I had an understanding of testing with a few tests on both front-end and backend.
                        </li>
                        <li>
                            Linting - Could improve on overall linting.
                        </li>
                    </ul>
                </div>
            </div>           
        );
    }
}

export default Contact;