/// <reference path="./Modal.tsx" />

const Greeting: React.FC = () => {
   const [theme, setTheme] = React.useState("Dark");
   const [toggled, setToggle] = React.useState(false);

   const width = window.innerWidth;

   let styles;
   if(width > 440) styles = { height: "120vh" }
   else styles = { height: "130vh" }

   const BiggerModal = () => (
      <div className="modalContainer">
         <div className="modalClose" onClick={() => setToggle(false)}><p>Close</p></div>
         <Modal />
      </div>
   );
   const showModal = (bool: boolean) => bool ? <BiggerModal/> : false;

   return (
       <div className={`GreetingContainer ${theme}GreetingContainer`} style={styles}>
          <h1 className={`GreetingTitle ${theme}GreetingTitle`}>Lungskull</h1>
          <div id="GreetingButtonsContainer">
             <i id="moon" onClick={() => setTheme("Dark")} className="fas fa-moon"></i>
             <i id="music" onClick={() => setToggle(!toggled)} className="fas fa-music"></i>
             <i id="sun" onClick={() => setTheme("Light")} className="fas fa-sun"></i>
          </div>
          {showModal(toggled)}
       </div>
   );
}