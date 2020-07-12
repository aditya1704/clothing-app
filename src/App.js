import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import {connect} from 'react-redux'

import  Homepage from './pages/Homepage'
import Header from './components/header/Header'
import Shop from './components/shop/Shop'
import SignInPage from './pages/SignInPage'
import {auth,createUserProfileDocument} from './firebase/firebase-utilities'
import {setCurrentUser} from './redux/user/userAction'
class App extends React.Component {

  unsubscribeFromAuth=null
  
  //checks if the user is already logged in
  componentDidMount(){
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      //if userAuth is done then we will either create a new profile in firestore if it already does not exists in firestore
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
          })
      
      }
      //if Auth is not done then userAuth will return null 
      else{
        setCurrentUser(userAuth)
      
      }
    })
  
  }
//check if the user has logged out before closing the app 
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/' />):(<SignInPage/>)}/>
      </Switch>
    </div>
    </>
  );
}
}

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
