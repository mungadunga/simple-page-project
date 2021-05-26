const Modal = () => {
    let width = window.innerWidth * 10 / 440;
    if (width > 10)
        width = 10;
    const format = (x) => -27.5 * x + 275;
    const styles = {
        marginTop: `-${format(width)}px`,
        transform: `scale(${width / 10})`,
    };
    return (React.createElement("div", { className: "modal", style: styles },
        React.createElement("img", { id: "img", src: "./images/cur.jpg", alt: "main image" }),
        React.createElement("p", { id: "description" }, "Lungskull"),
        React.createElement("div", { id: "smaller-container" },
            React.createElement("a", { href: "https://discord.com/invite/cUgrDbrR5w" },
                React.createElement("div", { className: "logo-container" },
                    React.createElement("img", { id: "discord", src: "./images/discord.png", alt: "discord" }),
                    React.createElement("p", { className: "logo-text" }, "Listen"))),
            React.createElement("a", { href: "https://www.youtube.com/channel/UC7-tpBpRS5v-lS8rp671Frw" },
                React.createElement("div", { className: "logo-container" },
                    React.createElement("img", { id: "youtube", src: "./images/youtube.png", alt: "youtube" }),
                    React.createElement("p", { className: "logo-text" }, "Subscribe"))),
            React.createElement("a", { href: "https://open.spotify.com/artist/2wvTwsc93H5xfsHE6QK1nl" },
                React.createElement("div", { className: "logo-container" },
                    React.createElement("img", { id: "spotify", src: "./images/spotify.png", alt: "discord" }),
                    React.createElement("p", { className: "logo-text" }, "Listen"))),
            React.createElement("a", { href: "https://soundcloud.com/lungskull" },
                React.createElement("div", { className: "logo-container" },
                    React.createElement("img", { id: "soundcloud", src: "./images/soundcloud.png", alt: "soundcloud" }),
                    React.createElement("p", { className: "logo-text" }, "Listen"))),
            React.createElement("a", { href: "https://music.apple.com/au/artist/lungskull/1543091913" },
                React.createElement("div", { className: "logo-container", id: "apple-music-container" },
                    React.createElement("img", { id: "apple-music", src: "./images/apple-music.png", alt: "discord" }),
                    React.createElement("p", { className: "logo-text" }, "Listen"))))));
};
/// <reference path="./Modal.tsx" />
const Greeting = () => {
    const [theme, setTheme] = React.useState("Dark");
    const [toggled, setToggle] = React.useState(false);
    const width = window.innerWidth;
    let styles;
    if (width > 440)
        styles = { height: "120vh" };
    else
        styles = { height: "130vh" };
    const BiggerModal = () => (React.createElement("div", { className: "modalContainer" },
        React.createElement("div", { className: "modalClose", onClick: () => setToggle(false) },
            React.createElement("p", null, "Close")),
        React.createElement(Modal, null)));
    const showModal = (bool) => bool ? React.createElement(BiggerModal, null) : false;
    return (React.createElement("div", { className: `GreetingContainer ${theme}GreetingContainer`, style: styles },
        React.createElement("h1", { className: `GreetingTitle ${theme}GreetingTitle` }, "Lungskull"),
        React.createElement("div", { id: "GreetingButtonsContainer" },
            React.createElement("i", { id: "moon", onClick: () => setTheme("Dark"), className: "fas fa-moon" }),
            React.createElement("i", { id: "music", onClick: () => setToggle(!toggled), className: "fas fa-music" }),
            React.createElement("i", { id: "sun", onClick: () => setTheme("Light"), className: "fas fa-sun" })),
        showModal(toggled)));
};
/// <reference path="./components/Greeting.tsx" />
const App = () => {
    return (React.createElement("div", null,
        React.createElement(Greeting, null)));
};
ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));
