import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';



const mapDispatchToProps = (dispatch) => ({
  signin: (user) => dispatch(signin(user)),
});

const Greeting = (props) => {
  const demoUser = {username: "Anna	Young", email: "Anna_young@gmail.com", password: "password" };
  return  (
    <section className="lange-quote">
      <p>"Photography takes an instant out of time,<br/> altering life by holding it still"</p>
      <small>Dorothea Lange</small>
      <button onClick={ () => props.signin(demoUser) } >Demo user Sign In </button>
    </section>
  );
};




export default connect(
  null,
  mapDispatchToProps
)(Greeting);
