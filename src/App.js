import { Container } from "@material-ui/core"
import Header from "./Components/Header"
//import Rishav from "./Rishav"
//import GridCard from "./Components/GridCard"
import CardItems from "./Components/CardItems"
import Login from "./Components/Login"


const App = () => {
  return (
    <Container>
    <Header />
    <CardItems />
    <Login />
    </Container>
    

  )
}

export default App