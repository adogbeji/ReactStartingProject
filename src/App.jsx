// import reactImg from './assets/react-core-concepts.png';
// import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/* <CoreConcept 
            title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description} 
            img={CORE_CONCEPTS[0].image}
          /> */}
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </section>
        {/* <h2>Time to get started!</h2> */}

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;