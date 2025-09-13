import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contect';
import Footer from './components/Footer';
import Skills from './components/Skills';
import WorkExperience from './components/Exprience';
import AITools from './components/Aitools';
import CodeEditors from './components/codeeditior';
import Education from './components/Education';
import DSA from './components/Dsa';
// import Stats from './components/Stats';


const App = () => {
return (
<div>
<Navbar />
<Hero />
{/* <Stats/> */}
<About />
<Education/>
<WorkExperience />
<Skills/>
<AITools/>
<CodeEditors/>
<DSA/>
<Projects />
<Contact />
<Footer />
</div>
);
};


export default App;