import About from "./about/page";
import Skills from "./skills/page";
import Education from "./education/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <section>
      <main id="home">
        <div className ="home-content">
            <h1>Hi, THIS IS MAHNOOR JAVAID</h1>
            <h3>Frontend Developer</h3>
                    <p> A beginner frontend developer with a growing passion for creating dynamic web applications. 
                    currently exploring TypeScript, Tailwind CSS, and Next.js, building my skills as I progress. 
                    I love the challenge of learning new technologies and am excited to see 
                    how I can apply them to real-world projects. </p>  
        </div>
        </main>
        <About/>
        <Skills/>
        <Education/>
        <Contact/>
    </section>
  )}
