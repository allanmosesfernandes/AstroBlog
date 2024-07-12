import { ReactTyped } from "react-typed";


const FirstFold = () => {
    const company_name = "Responsible Life";
    const company_url = "https://www.responsiblelife.co.uk/";

    return (
        <div className="firstfold__wrapper">
            <div className="firstfold__left">
                <h2>Hello;</h2>
                <p>I’m Allan.</p>
                <svg width="53px" height="53px" viewBox="0 0 53 53" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="">
                    <g id="arrow-wrap" stroke="none" stroke-width="1" fill="transparent" fill-rule="evenodd">
                        <g id="arrow" transform="translate(-904.000000, -343.000000)" stroke="#EEECDE" stroke-width="2">
                            <path d="M912.545285,345 L946.743,379.198 L946.74357,345.246688 L956,345.246688 L956,395 L906.246688,395 L906.246688,385.74357 L940.198,385.743 L906,351.545285 L912.545285,345 Z" id="wrap-arrow1a"></path>
                        </g>
                    </g>
                </svg>
                <p>
                    a &#123;&nbsp;
                        <ReactTyped
                            strings={["frontend developer_ &#125;", "CSS fanboy_ &#125;", "espresso fanatic_ &#125;", "tech tinkerer_ &#125;","chatGPT came up with these_ &#125;","lol &#125;"]}
                            typeSpeed={30}
                            backSpeed={40}
                            loop
                            showCursor={false}
                        />
                    &nbsp;
                </p>
                <p>with an ardent passion for making web applications while also genuinely caring about user experience and thriving on good design.</p>
                <p>I've been a developer for the past 4 years currently creating PRs & squashing bugs or generating brand new ones at <a target="_blank" href={company_url}>{company_name}.</a></p>
            </div>
            <div className="firstfold__right">

            </div>
        </div>
    )
}

export default FirstFold