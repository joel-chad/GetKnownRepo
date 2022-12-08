import React, {useState} from 'react'
import Button from '../../components/elements/Button';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
// import ButtonGroup from '../../elements/ButtonGroup';
// import Image from '../../elements/Image';
// import Modal from '../../elements/Modal';
import { Link } from 'react-router-dom';

const propTypes = {
    ...SectionProps.types
  }
  
  const defaultProps = {
    ...SectionProps.defaults
  }
  
  
function PersonalDetails({
    nextStep, prevStep,
        className,
        topOuterDivider,
        bottomOuterDivider,
        topDivider,
        bottomDivider,
        hasBgColor,
        invertColor,
        ...props}) {

            const outerClasses = classNames(
                'hero section center-content',
                topOuterDivider && 'has-top-divider',
                bottomOuterDivider && 'has-bottom-divider',
                hasBgColor && 'has-bg-color',
                invertColor && 'invert-color',
                className
              );
            
              const innerClasses = classNames(
                'hero-inner section-inner',
                topDivider && 'has-top-divider',
                bottomDivider && 'has-bottom-divider'
              );

    const Continue = e => {
        e.preventDefault();
        nextStep();
      }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }


    return (
    <>
    <section
      {...props}
      className={outerClasses}
    >
      
        <div className='container-sm'>
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Company Details
            </h1>
            <div className={innerClasses}>
                <p>What is the name of your organisation?</p>
                <p>Can you provide us with an email/phone number?</p>
                <p>What industry is your business in?</p>

            </div>
          <Button tag='a' color='primary' onClick={ Previous }>Previous</Button>
          <Button tag='a' color='primary' onClick={ Continue }>Next</Button>
          </div>
          </div>
          </div>
          </section>
    </>
  )
}

export default PersonalDetails;