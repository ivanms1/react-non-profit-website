import React, { Component } from 'react';
import './App.css';
import NavBar from './navBar';
import PageOne from './pageOne';

function LandingPage(props){
	return  <div className='landingPage container'>
				<div className='pageTwo'>
					<NavBar position={props.position}/>
						<h1 className='title2'>Akha</h1>
						<p className='subtitle2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
				<div className='pageThree'>
				<div className='title3Box'>
					<h1 className="title3">Uniskript?</h1>
				</div>
				<div className="imgDiv">
					<p className="paragraph3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, consequuntur.</p>
				</div>
				<div className="pageFour">
					<div className="title4Box">
						<h1 className="title4">Our Teachers</h1>
					</div>
					<div className="imgDiv2">
						<div className="teachersGrid">
							<h2 className="teacherName name1">Paul</h2>
							<img src="pics/paul1.jpg" alt="" className="teacherPic pic1"/>
							<p className="teacherDes des1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, recusandae?</p>
							<h2 className="teacherName name2">Pone</h2>
							<img src="pics/pone1.jpeg" alt="" className="teacherPic pic2"/>
							<p className="teacherDes des2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, sunt.</p>
							<h2 className="teacherName name3">Pla</h2>
							<img src="pics/pla1.jpg" alt="" className="teacherPic pic3"/>
							<p className="teacherDes des3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ad. Lorem ipsum.</p>
						</div>
					</div>
				</div>
				<div className="pageFive">
					<div className="title4Box">
						<h2 className="title4">Our Students</h2>
					</div>
					<div className="imgDiv3">
						<div className="studentsImgBox">
							<img src='http://via.placeholder.com/700x333' alt="" className="studentsImg"/>
						</div>
						<p className="studentsPar">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos repellendus magni dolorem consequatur quas ab, culpa nemo in voluptatum at.</p>
					</div>
				</div>
				<div className="pageSix">
					<div className="title4Box">
						<h2 className="title4">Donate</h2>
					</div>
						<div className="imgDiv4">
							<div className="donateParBox">
								<h2 className="donatePar">Molestias eius in saepe velit, repellendus culpa, ullam laudantium soluta sunt hic.</h2>
							</div>
							<div className="donateBox">
								<div className="wordsBox"><h2 className="words word1">General donation</h2></div>
								<div className="wordsBox"><h2 className="words word2">Support a teacher</h2></div>
								<div className="donate donate1">
									<div className="donateInput">
										<input className='numberInput' type="number"/>
										<input className='donateBtn' type="submit" value='Donate'/>
									</div>
									<div className="checkboxBox">
										<input className='checkbox' type="checkbox" name='time' value='monthly'/> Monthly <br/>
									</div>
							</div>
							<div className="donateTeacher donate2">
								<div className="donateInput">
									<input className='numberInput' type="number"/>
									<input className='donateBtn' type="submit" value='Donate'/>
								</div>
								<select name="Teachers">
									<option value="teacher">Choose your teacher</option>
									<option value="Paul">Paul</option>
									<option value="Pone">Pone</option>
									<option value="Pla">Pla</option>
								</select><br/>
								<div className="checkboxBox">
									<input className='checkbox' type="checkbox" name='time' value='monthly'/> Monthly <br/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pageSeven">
					<div className="title4Box">
						<h2 className="title4">Contact</h2>
					</div>
					<div className="imgDiv5">
						<div className='contactTitleContainer'>
							<h1 className='contactTitle'>Get in touch with us</h1>
						</div>
					</div>
					<div className="contactForm">
						<form action="">
							<p>Please fill this form</p>
							<input type="text" name="name" placeholder="Your name"/>
							<input type="email" name="email" placeholder="Your email"/>
							<textarea rows='3' cols='5' name="message" placeholder="Your message"></textarea>
							<button type='submit' value='Submit'>Submit</button>
						</form>
						<div className="connect">
							<h2>Connect with us</h2>
							<p>For any other question:</p>
							<p>Email us at <a href="/">uniskripthailand@gmail.com</a></p>
						</div>
					</div>
					<div className="footer">
						<div className="uniInfo">
							<h2>Follow Us On Social Media</h2>
							<ul className="accordion">
								<i className='tab'>
									<div className="social facebook">
										<a href="https://www.facebook.com" target='_blank'>Facebook</a>
									</div>
									<div className="content">
										<h1>Facebook</h1>
										<p>Follow our page on Facebook</p>
									</div>
								</i>
								<i className='tab'>
									<div className="social youtube">
										<a href="https://www.youtube.com" target='_blank'>Youtube</a>
									</div>
									<div className="content">
										<h1>Youtube</h1>
										<p>Suscribe to our channel</p>
									</div>
								</i>
								<i className='tab'>
									<div className="social instagram">
										<a href="https://www.instagram.com" target='_blank'>Instagram</a>
									</div>
									<div className="content">
										<h1>Instagram</h1>
										<p>Follow us on Instagram</p>
									</div>
								</i>
								<i className='tab'>
									<div className="social twitter">
										<a href="https://www.line.com" target='_blank'>Twitter</a>
									</div>
									<div className="content">
										<h1>Twitter</h1>
										<p>Follow us on Twitter</p>
									</div>
								</i>
							</ul>
						</div>
						<div className="rights">
							<p>© Uniskript 2018. All rights reserved</p>
							<p>Made by <a href="https://wwwivanmaximilianocom.000webhostapp.com/">Ivan</a></p>
						</div>
					</div>
				</div>
			</div>
			</div>
	}

export default LandingPage;