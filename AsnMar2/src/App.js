import React from "react";
import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import LoginComponent from "./LoginComponent.js";
import MembersComponent from "./MembersComponent.js";
import RegisterComponent from "./RegisterComponent.js";
const App = () => {
  return (
    <div className="App">
      <h1>React App</h1>
      {/*<TodoUseContext.Provider value={todoUse}>
        <TodosApp/>
  </TodoUseContext.Provider>*/}


      {/*<BrowserRouter>
        <Link to="/bettercounter1">Better Link Counter</Link><br />
        <Link to="/hobbies">Better Link Hobbies</Link><br />
        <Link to="/show/bhargavi/21">Show Name And Age</Link><br />
        <Link to="/bettercounter1/todo">Todo as child</Link><br />
        <Link to="/forum/add">Add as child</Link><br />
        <Link to="/showprod/Realme7/16,000Rs">Show Product And Price</Link><br />

        <Routes>
          <Route path="/bettercounter1" element={<BetterCounter1 />}>
            <Route path="todo" element={<TodoApp />} />
          </Route>

          <Route path="/forum" element={<Forum />}>
            <Route path="add" element={<Add />} />
          </Route>

          <Route path="/hobbies" element={<Hobbies />} />

          <Route path="/show/:name/:age" element={<ShowNameAndAge />} />

          <Route path="/showprod/:name/:price" element={<ShowProductAndPrice />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
<Link to="/show/bhargavi/21/Hyderabad">Show Employee Details</Link><br />
<Routes>
<Route path="/show/:name/:age/:city" element={<ShowEmployee />} />
</Routes>
</BrowserRouter>
      <Add></Add>
      <BrowserRouter>
      
      <Link to="/hobbies">Better Link Hobbies</Link><br />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route element={<ProtectedRouter />}>
            <Route path="/hobbies" element={<Hobbies />} />
          </Route>

        </Routes>
      </BrowserRouter>
*/}

<BrowserRouter>
      <Link to='/register' >Register Component</Link><br/>
      <Link to='/login'>Login Component</Link><br/>
      <Link to='/members'>All Details</Link>  
      <Routes>
        <Route path='/register' element={<RegisterComponent />} />
        <Route path='/login' element={<LoginComponent/>} />
        <Route path='/members' element={<MembersComponent />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;