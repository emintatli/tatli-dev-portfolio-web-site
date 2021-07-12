import Content from "./Content"
import { Link } from "react-router-dom"
const About=()=>{
    return <>
       
       <Content>
           <h1>About Me</h1>
        <p>I'm M. Emin TATLI,<br/>
        I grew up in Ankara and born in 1997. Actually im an Electric Electronic Engineer Student but i always enjoy to code so
         i decided to make a career in coding.I hope am gonna have my Electric Electronic Engineering Bachelor's
          Degree on 09.2021 in <a href="https://sakarya.edu.tr">Sakarya University</a>. I don't have a professional 
          experience but you can check my <Link to="/projects">personal projects</Link>.I think most of them pretty good.<br/><br/>
           My coding experience started with CMD when i was just a kid. I was trying to do someting with CMD even without having an internet connection.
            Then i met with <b>Delphi</b>. Delphi was pretty fun , it's my first programming language ever and in those days I still didn't have an internet connection. I had a program called
            Delphi Code Bank , this program helped a lot. Inside of it there were tousands of coding examples and I was trying to put them together and try to someting work.<br/><br/>
            When i started University i learned <b>C#</b> first time and this time i was able to get a internet connection and learn things properly.Then i learned <b>MATLAB</b> and i did a <b>TUBITAK</b> project with it.That was pretty fun.
       <br/> Here is my <b>TUBITAK</b> project :<b><a href="https://github.com/emintatli/Detecting-Electronic-Card-Issues-MATLAB">Github</a></b>
      <br/> <br/> Then i learned <b>Embedded C</b> but i was too annoying and expensive when it comes to build something and there are not much documentation on web.I did some projects with embedded C you can check them on my Github account.But I took my hands off on embeded systems.
        <br/><br/>
        Then i started to learn <b>Front end Development</b> and im still learning and building projects since then.I also know a bit of (enough to save the day 😁 ) <b>Back end Development</b> (<b>Auth API(JSONWebToken,HTTP Only Cookies),Socket,MongoDB,ExpressJs</b>)

        </p>


       </Content>
       </>
    }
    export default About