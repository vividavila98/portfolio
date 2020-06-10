import React, {useState} from 'react';
import '../styles/moneywise.scss';
import { 
    Row, Col, Collapse, Button, CardBody, Card
} from 'reactstrap';
import up from '../images/up-arrow.svg';
import down from '../images/down-arrow.svg';
import clarity from '../images/clarity.png';
import ynab from '../images/ynab.png';
import screens from '../images/screensbg.png';
import pie from '../images/pie.png';
import income from '../images/income.png';
import needs from '../images/needs.png';
import wants from '../images/wants.png';
import savings from '../images/savings.png';
import money from '../images/moneybg.png';
import github from '../images/git.png';
import code from '../images/plaid-code.png';
import plaid from '../images/plaid.jpeg';
import Navigation from './navigation';
import Footer from './footer';

export default function Moneywise() {
    const [isOverviewOpen, setIsOverviewOpen] = useState(false);
    const [isContextOpen, setIsContextOpen] = useState(false);
    const [isProcessOpen, setIsProcessOpen] = useState(false);
    const [isSolutionOpen, setIsSolutionOpen] = useState(true);

    const toggleOverview = () => setIsOverviewOpen(!isOverviewOpen);
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
        {/* Project Overview */}
        <section className='context container'>
            <h3><span className='code'>01. </span>Project Overview<span><Button className='arrow' onClick={toggleOverview}><img src={isOverviewOpen? up : down } alt='arrow'/></Button></span></h3>
            <Collapse isOpen={isOverviewOpen}>
                <Card>
                    <CardBody className='text-box'>
                        <h4>Introducting Money Wise</h4>
                        <p style={{color: 'gray', fontStyle: 'italic'}} className='mb-0'>April 2020 - Present</p>
                        <img src={money} className='thumbnail img-fluid' alt='money wise'/>
                        <h5>Concept</h5>
                        <p>
                          Money Wise helps users start and maintain a budget by connecting to their bank account and monitoring if they are following the
                          50/30/20 budgetary rule.
                        </p>
                        <h5>My Role</h5>
                        <p>UX/UI Designer, Mobile Developer</p>
                        <h5>Tech Stack</h5>
                        <p>
                        React Native, JavaScript, ExpressJS, Plaid API 
                        </p>
                        <a href='https://github.com/vividavila98/MoneyWise' target='_blank'><img src={github} className='github'/></a>
                    </CardBody>
                </Card>
            </Collapse>
</section>
          {/* Context and Challenge */}
          <section className='context container'>
              <h3><span className='code'>02. </span>Context &amp; Challenge<span><Button className='arrow' onClick={toggleContext}><img src={isContextOpen? up : down } alt='arrow'/></Button></span></h3>
              <Collapse isOpen={isContextOpen}>
                  <Card>
                      <CardBody className='text-box'>
                          <h4>Motivation</h4>
                            <p>
                            As a self-taught Front-End Web Developer, I am constantly learning new technologies 
                            through online tutorials and internships, with React Native being one of them. I wanted 
                            to explore the mobile development process even more , so I decided to challenge myself by building a personal financial budgeting application 
                            to both solidify my technical skills and improve how I manage my money. 
                            </p>
                            <h4 className='sub'>Problem</h4>
                            <p>
                            Creating and maintaining a budget is one of the most effective ways to manage your money wisely. Deciding 
                            to create a budget is a great start, but it leads to a multitude of questions: How exactly do I split up my 
                            income? How much money am I supposed to save? How do I know when I’ve spent too much money? These types of 
                            questions are what make budgeting intimidating and even overwhelming to some people, which stops them from ever starting one.
                            </p>
                            <h4 className='sub'>Project Goals &amp; Objectives</h4>
                            <p>
                            My goal is to create an application for people who don’t know how to start a budget or don’t know how to 
                            maintain one. I want the concept behind the application to be simple enough for people to be able to start budgeting right away, and low-maintenance
                            enough for people to be able to easily continue maintaining it. 
                            </p>
                        </CardBody>
                    </Card>
                </Collapse>
          </section>
          {/* Process and Insight */}
          <section className='context container'>
              <h3><span className='code'>03. </span>Process &amp; Insight<span><Button className='arrow' onClick={toggleProcess}><img src={isProcessOpen? up : down } alt='arrow'/></Button></span></h3>
             <Collapse isOpen={isProcessOpen}>
                 <Card>
                 <CardBody className='text-box'>
                  <h4>Competitive Analysis</h4>
                  <p>
                  To better understand the problem space, I researched what other personal financial budgeting applications have to offer. 
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
                  I then interviewed two close friends of mine to gain insight in what their experience is like with budgeting their money. 
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
                      I found that neither users maintain a budget and only loosely track where their money goes. Neither of them have
                      a method as to how much money they should save, so they only save money here and there. One even mentioned that they
                      only know when they have spent too much when they've been notified by their bank that they're under a pre-determined limit.   
                </p>
              </CardBody>
                 </Card>
             </Collapse>
          </section>
          {/* Solution */}
          <section className='context container'>
              <h3><span className='code'>04. </span>My Solution<span><Button className='arrow' onClick={toggleSolution}><img src={isSolutionOpen? up : down } alt='arrow'/></Button></span></h3>
              <Collapse isOpen={isSolutionOpen}>
                  <Card>
                      <CardBody className='text-box'>
                          <h4>50/30/20 Rule</h4>
                          <img src={pie} className='screen img-fluid' alt='screens'/>
                          <p>
                              Based on my findings, I wanted my application to be based on an easy-to-follow budgetary rule, which is when I 
                              discovered the 50/30/20 rule. Popularized by Senator Elizabeth Warren, the 50/30/20 rule says to distribute 50% of your income on needs, 
                              30% on wants, and 20% to savings. The 50/30/20 rule is the perfect budgeting method for people who don't know how to get started on one. With 
                              this rule, they can be at ease knowing that there's an application monitoring their spending habits. 
                          </p>
                          <h4>Core Features of MoneyWise</h4>
                          <img src={screens} className='thumbnail img-fluid' alt='screens'/>
                          <h5>Monthly Income</h5>
                          <img src={income} className='img-fluid thumbnail' alt='income' />
                          <p>
                              By connecting to their bank accounts, users can view their monthly income to start budgeting. Money Wise will automatically list what they believe make up their monthly income, which users can then edit to include the monthly amount, expected
                              frequency, and category to get the accurate amount.
                        </p>
                          <h5>Monthly Spendings on Needs</h5>
                          <img src={needs} className='img-fluid thumbnail' alt='income' />
                          <p>
                              With the monthly income stored, 50% of the value will be calculated to then allot that amount to be spent on necessities. 
                              Money Wise will display a donut chart to easily show the user how much money they have left to spend on this category.
                              Users can then view a more detailed list of their needs broken down into categories they created that track specific bank transactions. 
                        </p>
                          <h5>Monthly Spendings on Wants</h5>
                          <img src={wants} className='img-fluid thumbnail' alt='income' />
                          <p>
                              Similarly to the Needs category, 30% of the user's income will be calculated to track how much money
                              users can spend on things they want. They can also see a more detailed list of their wants automatically broken down into categories created by Money Wise.
                        </p>
                          <h5>Monthly Savings</h5>
                          <img src={savings} className='img-fluid thumbnail' alt='income' />
                          <p>
                              Finally, 20% of their income will be calculated to see how much money they should be saving monthly. Users can connect to their savings accounts
                              and even set goals with specific amounts and dates to stay motivated. 
                        </p>
                          <h4>Working With The Plaid API</h4>
                          <img src={plaid} className='img-fluid screen' alt='income' />
                          <p>This is the first time I've ever worked with the <a href='https://plaid.com/docs/quickstart/' target='_blank' style={{color: 'white', fontStyle: 'italic'}}>Plaid API</a>, and the documentation for using it with React Native is a bit dated, so I want to quickly run through it.</p>
                          <p><b>What is the Plaid API</b></p>
                          <p>The Plaid API allows you to connect your bank account to your application. Once it's securely connected, you can get information such as transaction history, balance, income, and more.</p>
                          <p><b>The Flow</b></p>
                          <p>
                              When you create an account with Plaid, you'll be given three API keys: a public key, a secret key, and a client id. Once you have your API keys, you'll be able to 
                              make requests that interact with an <b>Item</b>, which is a set of credentials that is linked to your bank account. 
                        </p>
                        <p>To create an Item, we'll be using Plaid Link, which will handle credential validation, multi-factor authentication, and even error handling. Here's the overview of how it works:</p>
                        <ol>
                            <li>Your user creates an Item, which returns a public token</li>
                            <li>In the onSuccess callback, you send the public token to the server</li>
                            <li>The server exchanges the public token for an access token and item id</li>
                        </ol>
                        <p><b>Glance of My Code</b></p>
                        <p>First I installed the dependencies I needed: plaid, react-native-plaid-link, and axios.</p>
                        <p>Here's what the Plaid Link component should look like:</p>
                        <img src={code} className='img-fluid screen' alt='income' />
                        <h4>Going Forward</h4>
                        <p>
                            Now with the Plaid API integrated, I'm set to create a fully functioning personal financial budgeting application. To track my progress, checkout my Github repository linked in my Project Overview. Thanks for reading!
                        </p>
                        </CardBody>
                    </Card>
                </Collapse>
          </section>
          <Footer />
	   </div>
    );
}
