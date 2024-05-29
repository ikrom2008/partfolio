import './Main.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';


function Main() {


  return (
    <div>
      <main className="main" style={{flexDirection: 'column'}}>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </div>
  );
}

export default Main;
