const Modal: React.FC = () => {
   let width: number = window.innerWidth * 10 / 440;
   if (width > 10) width = 10;
   const format = (x: number):number => -27.5 * x + 275;

   const styles = {
      marginTop: `-${format(width)}px`,
      transform: `scale(${width / 10})`,
   };

   return (
      <div className="modal" style={styles}>
         <img id="img" src="./images/cur.jpg" alt="main image" />
         <p id="description">Lungskull</p>
         <div id="smaller-container">
            <a href="https://discord.com/invite/cUgrDbrR5w">
               <div className="logo-container">
                  <img id="discord" src="./images/discord.png" alt="discord" />
                  <p className="logo-text">Listen</p>
               </div>
            </a>
            <a href="https://www.youtube.com/channel/UC7-tpBpRS5v-lS8rp671Frw">
               <div className="logo-container">
                  <img id="youtube" src="./images/youtube.png" alt="youtube" />
                  <p className="logo-text">Subscribe</p>
               </div>
            </a>
            <a href="https://open.spotify.com/artist/2wvTwsc93H5xfsHE6QK1nl">
               <div className="logo-container">
                  <img id="spotify" src="./images/spotify.png" alt="discord" />
                  <p className="logo-text">Listen</p>
               </div>
            </a>
            <a href="https://soundcloud.com/lungskull">
               <div className="logo-container">
                  <img id="soundcloud" src="./images/soundcloud.png" alt="soundcloud" />
                  <p className="logo-text">Listen</p>
               </div>
            </a>
            <a href="https://music.apple.com/au/artist/lungskull/1543091913">
               <div className="logo-container" id="apple-music-container">
                  <img id="apple-music" src="./images/apple-music.png" alt="discord" />
                  <p className="logo-text">Listen</p>
               </div>
            </a>
         </div>
      </div>
   );
}