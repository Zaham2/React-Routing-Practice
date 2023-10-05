import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation, MemoryRouter, Navigate, BrowserRouter, Link, useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate()
  return (
    <Router>
      <h1>Hello React</h1>
      <Routes>
        <Route path='one' element={<Main text='1' />} />
        <Route path='three' element={<Button text='1'/>} />
        <Route path='two/*'>
          <Route index element={<Main text='2' />} />
          <Route path='four/*' element={<><Filler text='f'/> <Outlet /></>} />
          <Route path='nine' element={<Main text='9' />} />
          <Route path='*' element={<NotFound text={'not found 1'}/>} />
        </Route>
      </Routes>
    </Router>
  )
}
const Button = (props) => {
  return(
    <button
      onClick={() => {
        console.log('i have been pushed!!');
      }}
    >click me! {props.text}</button>
  )
}

const NotFound = (props) => {
  return(
    <h1>404 not found {props.text}</h1>
  )
}

const Main = (props) => {
  return (
    <div>
      <h2>Main Component {props.text}</h2>
    </div>
  )
}

const Dummy = (props) => {
  return (
    <div>
      <h2>Dummy {props.text}</h2>
    </div>
  )
}

const InnerNavigate = () => {
  return (
    <div>
      I am in InnerNavigate now <br />
      I will print {useLocation().pathname}
      {/* <Navigate to='seven' replace={true}/> */}
    </div>
  )
}




// For testing purposes only
const Filler = (props) => {  
  console.log(useLocation());
  return (
    <div>
      <h3>Filler {props.text}</h3>
      <Dummy text='d3' />
      <Main text='m5' />
        <MemoryRouter basename='/two'>  
          <Routes>
            <Route index element={<InnerNavigate text={'main 4'}/>} />
            <Route path='/seven' element={<Main text='main 2' />}/>
            <Route path="*" element={<NotFound text='not found 3' />} />
          </Routes>
        </MemoryRouter>
    </div>
  )
}

export default App;
