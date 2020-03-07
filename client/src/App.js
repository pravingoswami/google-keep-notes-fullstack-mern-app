// import React from 'react'
import React, { useState } from 'react'
import  { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import { connect } from 'react-redux'
import { startRemoveUser } from './actions/usersAction'
import NoteList from './components/notes/NoteList'
import CategoriesList from './components/categories/CategoriesList'
import NoteCreate from './components/notes/NoteCreate'
import NoteShow from './components/notes/NoteShow'
import EditNote from './components/notes/EditNote'
import CategoryView from './components/categories/CategoryView'
import CategoryEdit from './components/categories/CategoryEdit'
import NoteArchived from './components/notes/NoteArchived'
import NoteBin from './components/notes/NoteBin'




function App (props) {

    const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () => setIsOpen(!isOpen)

  const LinkStyle = {
    textDecoration : "none",
    color : "white"
  }

  const handleLogout = () => {
    props.dispatch(startRemoveUser())
  }

  return (
    <div>
    <BrowserRouter>
    <Navbar color="dark" dark expand="md">
      <NavbarBrand><strong>NOTE APP</strong></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink ><Link to ="/home" style = {LinkStyle} >HOME</Link></NavLink>
          </NavItem>

        {
          Object.keys(props.user).length > 1 ? (
            <React.Fragment>
            <NavItem>
            <NavLink ><Link to ="/notes" style = {LinkStyle} >NOTES</Link></NavLink>
          </NavItem>

          <NavItem>
            <NavLink ><Link to ="/categories" style = {LinkStyle} >CATEGORIES</Link></NavLink>
          </NavItem>

          <NavItem>
            <NavLink ><Link to ="/home" style = {LinkStyle} onClick = {handleLogout } >LOGOUT</Link></NavLink>
          </NavItem>

          
          </React.Fragment>
          ) : (
            <React.Fragment>
            <NavItem>
            <NavLink ><Link to ="/login" style = {LinkStyle} >LOGIN</Link></NavLink>
          </NavItem>

          <NavItem>
            <NavLink ><Link to ="/register" style = {LinkStyle} >REGISTER</Link></NavLink>
          </NavItem>
          </React.Fragment>
          ) 
        }
        </Nav>
        {/* <Nav>
        <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
        </Nav> */}
      </Collapse>
    </Navbar>
        <Switch>        
          <Route path = "/home" component = {Home} />
        <Route path = "/login" component = {Login} />
        <Route path = "/register" component = {Register} />
        <Route path = "/logout" component = {Home}/>
        <Route path = "/notes" component = {NoteList} exact = {true}/>
        <Route path = "/notes/add-notes" component = {NoteCreate}/>
        <Route path = "/notes/note-detail/:note" component = {NoteShow}/>
        <Route path = "/notes/note-archived" component = {NoteArchived}/>
        <Route path = "/notes/note-bin" component = {NoteBin}/>

        <Route path = "/notes/edit-note/:note" component = {EditNote}/>
        <Route path = "/categories" component = {CategoriesList} exact = {true}/>
        <Route path = "/categories/category-detail/:category" component = {CategoryView}/>
        <Route path = "/categories/category-edit/:category" component = {CategoryEdit}/>
        </Switch>

      
    </BrowserRouter>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user : state.users
  }
}

export default connect(mapStateToProps)(App)

