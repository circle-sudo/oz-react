import Card from "./common/card/Card";
import SttledBox from "./common/box/StyledBox";

const Greeting = () => {
    const name = "Chan";
    return (
      <div>
        <h1>Hello, {name}</h1> 
      </div>
    );
  };
  
  const Button = () => {
    return <button>Click me</button>;
  };

  const MainPage = () => {
    return (
      <>
        <Greeting />
        <Button />
        <Card />
        <StyledBox />
      </>
    );
  };

  export default MainPage;