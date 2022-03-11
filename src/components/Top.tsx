import Navigation from "./navigations/Navigation"
import Birthday from "./TransitionButtons/Birthday"
import BloodType from "./TransitionButtons/BloodType"
import Constellation from "./TransitionButtons/Constellation"
import Name from "./TransitionButtons/Name"
import StemsAndBranches from "./TransitionButtons/StemsAndBranches"

const Top = () => {
  return (
    <div className="main">
      <header>
        <Navigation />
      </header>
      <section>
        <h1>セクション1</h1>
        <Birthday />
      </section>
      <section>
        <h1>セクション2</h1>
        <BloodType />
      </section>
      <section>
        <h1>セクション3</h1>
        <Constellation />
      </section>
      <section>
        <h1>セクション4</h1>
        <Name />
      </section>
      <section>
        <h1>セクション5</h1>
        <StemsAndBranches />
      </section>
      <footer>
        <p>フッター</p>
      </footer>
    </div>
  )
}

export default Top