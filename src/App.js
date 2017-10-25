import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

// The PhoneInput will create a text input field that formats the user's input as a phone number as the user is typing

// When the input is initially rendered, with no user-entered value, the PhoneInput will display the string '(___) ___-____' (that's two groups of three underscores and one group of four)

// As the user types values, the 'mask' (the initial value) will be replaced one underscore at  a time

// Progression =>
// (__) ___-____
// (5__) ___-____
// (51_) ___-____
// (512) ___-____
// (512) 2__-____
// (512) 23_-____
// (512) 236-____
// (512) 236-8___
// etc...

// The user will be prevented from entering non-numeric characters
// The user will be prevented from exceeding the length of the phone number mask
// The input will not account for international or other phone formats


class PhoneInput extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: '',
      };
      // this.onChange = this.onChange.bind(this)
    }

    render() {
      return ( 
        <input type = "tel"

        maxLength = "10"
        /* pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$" */
        onChange = {this.handleChange}
        value ={this.handleChange}
        placeholder = "(___) ___-____"/>
      );
    };

    handleChange = (e) => { 
         if (isNaN(e.target.value)){
         alert("please enter numbers only")
        }else {

        var test =  (e.target.value).toString();
      var next = test.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '($1) $2-$3');

        
            this.setState ({
       value: next
           })
          }
        

      // ////////
      // if (isNaN(e.target.value)) {
      // //  alert("please enter a number")
      // }
      
      //   var test =  (e.target.value).toString();
      //   var length = test.length;
      
      //     test = test.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '($1) $2-$3')

      //     this.setState({
      //       value: test
      //     });
        


      // //   var test =  e.target.value;
      // //   var next = test.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '($1) $2-$3');

      // //   console.log(next);
      // //       this.setState ({
      // //  value: next
      // //      })
          
        }
  };

  export default PhoneInput;