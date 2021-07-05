import { Container } from "@material-ui/core"
//import Header from "./Components/Header"
//import Rishav from "./Rishav"
//import GridCard from "./Components/GridCard"
//import CardItems from "./Components/CardItems"
//import Login from "./Components/Login"
//import Register from "./Components/Register"
//import TableApi from "./Components/TableApi"
//import TableExcel from "./Components/TableExcel"
//import Datacvs from "./RestAPI/Datacvs"
//import Hooks from "./Practical/Hooks"
import Get from "./RestAPI/Get"
import Post from "./RestAPI/Post"


const App = () => {
  return (
    <Container>
    {/*<Header />
    <CardItems />
    <Login />
    <Register />
    <TableExcel />
    <Datacvs />
    */}
    <Post />
    <Get />
    
    
    
    </Container>
    

  )
}

export default App