import Info from "./Components/Info";

const App = () => {
  const userData = {
    name: "meerkahn",
    age: 34,
    email: "meerkhan@gmail.com",
  };

  return (
    <>
      <Info userData={userData} />
    </>
  );
};
export default App;
