import React, {Component} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import PersonalDetails from './PersonalDetails';

class Questionnaire extends Component {
    state = {
        step: 1
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    render() {
        const {step} = this.state
        switch (step) {
            case 1:
                return (
                    <PersonalDetails nextStep={this.nextStep} prevStep={this.prevStep}/>
                )
            case 2:
                return (
                    <Page1 nextStep={this.nextStep} prevStep={this.prevStep}/>
                )
            case 3:
              return (
                <Page2 nextStep={this.nextStep} prevStep={this.prevStep} />
              )
            // case 4:
            //   return (
            //     <Documents nextStep={this.nextStep} prevStep={this.prevStep}/>
            //     )
            //     case 5:
            //       return (
            //         <Membership nextStep={this.nextStep} prevStep={this.prevStep}/>
            //         )
            // never forget the default case, otherwise VS code would be mad!
            default:
        }
    }
}

export default Questionnaire;