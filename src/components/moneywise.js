import React, {useState} from 'react';
import '../styles/moneywise.scss';
import { 
    Row, Col, Collapse, Button, CardBody, Card
} from 'reactstrap';
import up from '../images/up-arrow.svg';
import down from '../images/down-arrow.svg';
import clarity from '../images/clarity.png';
import ynab from '../images/ynab.png';
import pie from '../images/pie.png';
import Navigation from './navigation';
import Footer from './footer';

export default function Moneywise() {
    const [isContextOpen, setIsContextOpen] = useState(false);
    const [isProcessOpen, setIsProcessOpen] = useState(false);
    const [isSolutionOpen, setIsSolutionOpen] = useState(true);

    const toggleContext = () => setIsContextOpen(!isContextOpen);
    const toggleProcess = () => setIsProcessOpen(!isProcessOpen);
    const toggleSolution = () => setIsSolutionOpen(!isSolutionOpen);

    return (
      <div className='money' id='money'>
          <Navigation />
          <header id='money-top' className='container-fluid'>
              <Row>
                  <Col className='money-header web-background'></Col>
                  <div className='container-fluid money-title-box'>
                      <h1 className='money-title text-center'>
                          Money Wise<br/>
                          <span><h3 className='money-title-caption text-center code'>Personal Financial Budgeting Application</h3></span><br/>
                      </h1>
                  </div>
                  <Col className='money-header'></Col>
              </Row>
          </header>
          {/* Context and Challenge */}
          <section className='context container'>
              <h3><span className='code'>01. </span>Context &amp; Challenge<span><Button className='arrow' onClick={toggleContext}><img src={isContextOpen? up : down } alt='arrow'/></Button></span></h3>
              <Collapse isOpen={isContextOpen}>
                  <Card>
                      <CardBody className='text-box'>
                          <h4>Motivation</h4>
                            <p>
                            As a self-taught Front-End Web Developer, I am constantly learning new technologies 
                            through online tutorials and internships, with React Native being one of them. I wanted 
                            to explore the mobile development process even more to feel fully proficient in React Native. 
                            Because of this, I decided to challenge myself by building a personal financial budgeting application 
                            to both solidify my technical skills and improve how I manage my money. 
                            </p>
                            <h4 className='sub'>Problem</h4>
                            <p>
                            Creating and maintaining a budget is one of the most effective ways to manage your money wisely. Deciding 
                            to create a budget is a great start, but it leads to a multitude of questions: How exactly do I split up my 
                            income? How much money am I supposed to save? How do I know when I’ve spent too much money? These types of 
                            questions is what makes budgeting intimidating and even overwhelming to some people. Budgeting needs to be simple 
                            enough to start and reassuring enough to continue maintaining it. 
                            </p>
                            <h4 className='sub'>Project Goals &amp; Objectives</h4>
                            <p>
                            My goal is to create an application for people who don’t know how to start a budget or don’t know how to 
                            maintain one. I want it to be simple enough for people to be able to start budgeting right away, and reassuring 
                            enough for people to want to continue maintaining their budget. 
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
          </section>
          {/* Process and Insight */}
          <section className='context container'>
              <h3><span className='code'>02. </span>Process &amp; Insight<span><Button className='arrow' onClick={toggleProcess}><img src={isProcessOpen? up : down } alt='arrow'/></Button></span></h3>
             <Collapse isOpen={isProcessOpen}>
                 <Card>
                 <CardBody className='text-box'>
                  <h4>Competitive Analysis</h4>
                  <p>
                  To better understand the problem space, I researched what other personal financial budgeting applications offer. 
                  </p>
                  <h5>Clarity Money</h5>
                  <img src={clarity} className='thumbnail img-fluid' alt='clarity money'/>
                  <p className='mb-5'>
                  Clarity Money allows you to link your bank accounts so that they can automatically organize your expenses into 
                  categories such as dining, groceries, shopping, and more. As for a budget, they use your income minus your recurring 
                  expenses to let you know how much money you have left to spend per week. Unfortunately, they don’t offer any advice as 
                  to how this money should be spent categorically. 
                  </p>
                  <h5>You Need A Budget</h5>
                  <img src={ynab} className='thumbnail img-fluid' alt='clarity money'/>
                  <p>
                  You Need a Budget follows a zero-based budget, meaning you assign each dollar a category to be spent on. The problem is 
                  similar in that they don’t offer any advice as to how much money should be spent per category. 
                  </p>
                  <h4 className='sub'>User Research</h4>
                  <p>
                  I interviewed two close friends of mine to gain insight in what their experience is like with budgeting their money. 
                  Some of the questions I asked included the following:
                  </p>
                      <ol className='list'>
                          <li>How do you keep track of your spendings?</li>
                          <li>How do you keep track of your bills?</li>
                          <li>What is your strategy for saving money? </li>
                          <li>What day-to-day things do you spend your money on?</li>
                          <li>Do you have an idea of how your spendings are broken up?</li>
                          <li>Do you use any money-managing apps?</li>
                          <li>What would you like to see in an app like that? </li>
                      </ol>
                  <p>
                  One person seemed pretty lost as to how they’re supposed to be allocating their money. They also seem to have enough money to 
                  save, but they don’t know how much of it to save. The other person brought up wanting their location to be tracked to then be notified in 
                  real time on how much they can spend. They both sound as if they’re in need of an easy-to-use tool that will still hold them accountable.
                  </p>
              </CardBody>
                 </Card>
             </Collapse>
          </section>
          {/* Solution */}
          <section className='context container'>
              <h3><span className='code'>03. </span>My Solution<span><Button className='arrow' onClick={toggleSolution}><img src={isSolutionOpen? up : down } alt='arrow'/></Button></span></h3>
              <Collapse isOpen={isSolutionOpen}>
                  <Card>
                      <CardBody className='text-box'>
                          <h4>30 / 50 / 20 Rule</h4>
                          <div className='text-center'><img src={pie} className='thumbnail text-center' alt='pie chart'/></div>
                            <p>
                            As a self-taught Front-End Web Developer, I am constantly learning new technologies 
                            through online tutorials and internships, with React Native being one of them. I wanted 
                            to explore the mobile development process even more to feel fully proficient in React Native. 
                            Because of this, I decided to challenge myself by building a personal financial budgeting application 
                            to both solidify my technical skills and improve how I manage my money. 
                            </p>
                            <h4 className='sub'>Problem</h4>
                            <p>
                            Creating and maintaining a budget is one of the most effective ways to manage your money wisely. Deciding 
                            to create a budget is a great start, but it leads to a multitude of questions: How exactly do I split up my 
                            income? How much money am I supposed to save? How do I know when I’ve spent too much money? These types of 
                            questions is what makes budgeting intimidating and even overwhelming to some people. Budgeting needs to be simple 
                            enough to start and reassuring enough to continue maintaining it. 
                            </p>
                            <h4 className='sub'>Project Goals &amp; Objectives</h4>
                            <p>
                            My goal is to create an application for people who don’t know how to start a budget or don’t know how to 
                            maintain one. I want it to be simple enough for people to be able to start budgeting right away, and reassuring 
                            enough for people to want to continue maintaining their budget. 
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
          </section>
          <Footer />
	   </div>
    );
}
