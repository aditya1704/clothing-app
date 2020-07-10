import React from 'react';
import './App.css';
import  Homepage from './pages/Homepage'
import {Switch,Route} from 'react-router-dom'
import Header from './components/header/Header'
import Shop from './components/shop/Shop'
import SignInPage from './pages/SignInPage'
import {auth,createUserProfileDocument} from './firebase/firebase-utilities'
class App extends React.Component {

  state={
    currentUser:null
  };

  unsubscribeFromAuth=null
  
  //checks if the user is already logged in
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      //if userAuth is done then we will either create a new profile in firestore if it already does not exists in firestore
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      //if Auth is not done then userAuth will return null 
      else{
        this.setState({
          currentUser:userAuth
        })
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
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/signin' component={SignInPage}/>
      </Switch>
    </div>
    </>
  );
}
}

export default App;
