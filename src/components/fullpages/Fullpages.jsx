import { FullPageSections, Fullpage, FullpageNavigation, FullpageSection } from '@ap.cx/react-fullpage'
import Hero from '../hero/Hero'
import Main from '../main/Main'
import '../hero/Hero.css'
import Footer from '../footer/Footer'
function Fullpages() {
  return (
    <Fullpage>
        <FullpageNavigation style={{cursor: 'pointer'}} />
        <FullPageSections>
            <FullpageSection>
                <Hero />
            </FullpageSection>
            <FullpageSection>
                <Main />
            </FullpageSection>
            <FullpageSection>
                <Footer />
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  )
}

export default Fullpages
