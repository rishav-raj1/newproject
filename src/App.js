import { Container } from "@material-ui/core"
import Header from "./Components/Header"
//import Rishav from "./Rishav"
//import GridCard from "./Components/GridCard"
import CardItems from "./Components/CardItems"
import Login from "./Components/Login"
import Register from "./Components/Register"


const App = () => {
  return (
    <Container>
    <Header />
    <CardItems />
    <Login />
    <Register />
    </Container>
    

  )
}

export default App