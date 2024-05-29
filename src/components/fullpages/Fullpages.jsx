import { FullPageSections, Fullpage, FullpageNavigation, FullpageSection } from '@ap.cx/react-fullpage'
import Hero from '../hero/Hero'
import '../hero/Hero.css'
import Footer from '../footer/Footer'
import Section1 from '../main/Section1'
import Section2 from '../main/Section2'
import Section3 from '../main/Section3'
function Fullpages({textenter,textleave,bigtextenter}) {
  return (
    <Fullpage className="container">
        <FullpageNavigation style={{cursor: 'pointer'}} />
        <FullPageSections className='container'>
            <FullpageSection>
                <Hero textenter={textenter} textleave={textleave} bigtextenter={bigtextenter}/>
            </FullpageSection>
            <FullpageSection>
                <Section1 textenter={textenter} textleave={textleave} />
            </FullpageSection>
            <FullpageSection>
                <Section2 textenter={textenter} textleave={textleave} />
            </FullpageSection>
            <FullpageSection>
                <Section3 textenter={textenter} textleave={textleave} />
            </FullpageSection>
            <FullpageSection>
                <Footer textenter={textenter} textleave={textleave} />
            </FullpageSection>
        </FullPageSections>
        
    </Fullpage>
  )
}

export default Fullpages
