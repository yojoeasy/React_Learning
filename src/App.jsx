import './App.css'
import {Greeting } from './Welcome.jsx'
import {Info, Info1, ProductCard} from './components/Info.jsx'
import {Counter, Toggle, Car} from './components/UseState.jsx'
import {ClickButton, InputBox, FormExample} from './components/EventHandling.jsx'
import {ToggleMessage, Status, Dashboard, Login} from './components/ConditionalRendering.jsx'
import {FruitList, ProductList, ProductList1} from './components/ListsAndKeys.jsx'
import {NameForm, ContactForm} from "./components/ControlledComponents.jsx"
import { UserList, UserList1 } from './components/UseEffect.jsx'
import {Context} from './components/UseContext.jsx'
import {CounterSec, Known, UserListSec} from './components/CustomHook.jsx'
import {FocusInput, CounterThi } from './components/UseRef.jsx'
import {ExpensiveComponent} from './components/UseMemo.jsx'
import{Parent, Parent1} from "./components/UseCallback.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import UserForm from './UserForm'
import User from './User.jsx';
import Dashboard1 from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';
import NotFound from './NotFound.jsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<UserForm />} />
        <Route path="/user/:id" element={<User />} />
        {/* Nested Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard1 />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* <ClickButton/>
        <InputBox/>
        <FormExample/> */}
        {/* <Greeting name="Yogesh" />
        <Greeting name="Neha" />
        <Greeting name="Ravi" /> */}
        {/* <hr/> */}
        {/* <Info name="Yogesh" age="27" place="Delhi"/>
        <Info1 name="Poonam" age="27" place="Delhi"/>
        <ProductCard name="Chocolate Cake" price={500} />
        <ProductCard name="Strawberry Cake" price={450} /> */}
        {/* <Counter/>
        <Toggle/>
        <Car/> */}
        {/* <Login isLoggedIn={false} />
        <Dashboard isAdmin={false} />
        <Status online={false} />
        <ToggleMessage /> */}
        {/* <FruitList/>
        <ProductList/>
        <ProductList1/> */}
        {/* <NameForm/>
        <br></br>
        <ContactForm/> */}
        {/* < UserList/>
        < UserList1/> */}
        {/* <Context/> */}
        {/* <CounterSec/>
        <Known/>
        <UserListSec/> */}
        {/* <FocusInput/>
        <CounterThi/> */}
        {/* <ExpensiveComponent/> */}
        <Route path="/parent" element={<Parent />} />
        <Route path="/parent1" element={<Parent1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
