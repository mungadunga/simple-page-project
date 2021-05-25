const App = () => {
    let width = window.innerWidth * 10 / 440;
    if (width > 10)
        width = 10;
    const format = (x) => 400 * x - 390;
    const styles = {
        marginTop: `${format(width / 10)}px`,
        transform: `scale(${width / 10})`,
    };
    return (React.createElement("div", null,
        React.createElement("img", { id: "background", src: "./images/cur.jpg", alt: "main image" }),
        React.createElement("div", { className: "container", style: styles },
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
                        React.createElement("p", { className: "logo-text" }, "Listen")))))));
};
ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));
