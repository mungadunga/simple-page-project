/// <reference path="./components/Greeting.tsx" />


const App: React.FC = () => {
   return (
      <div>
         <Greeting />
         {/* <SocialMedia /> */}
      </div>
   )
}

ReactDOM.render(<App />, document.querySelector("#root"));