import Navigation from "./Nav/Navigation"
import Birthday from "./TransitionButtons/Birthday"
import BloodType from "./TransitionButtons/BloodType"
import Constellation from "./TransitionButtons/Constellation"
import Name from "./TransitionButtons/Name"
import StemsAndBranches from "./TransitionButtons/StemsAndBranches"

const Top = () => {
  return (
    <div className="main">

      <header>
        <a href="/">
          LOGO
        </a>
        <Navigation />
        <h1>Title</h1>
        <p>xxxxxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxx</p>
      </header>

      <section className="common">
        <div className="local_top">
          <h1>サルベージの占いコーナー</h1>
          <p>世界を揺るがすほどの占い成績をもつ、</p>
          <p>あの、サルベージが公式に無料で占いコーナーを設立！！</p>
          <p>あなたの未来が必ず変えられる！？</p>
          <p>※お客さまが行動なさったことに関しては、当サイト関係者は一切の責任を負いかねます。</p>
        </div>
      </section>

      <section className="common">
        <div className="local_birthday">
          <Birthday />
        </div>
      </section>

      <section className="common">
        <div className="local_blood_type">
          <BloodType />
        </div>
      </section>

      <section className="common">
        <div className="local_constellation">
          <Constellation />
        </div>
      </section>

      <section className="common">
        <div className="local_name">
          <Name />
        </div>
      </section>

      <section className="common">
        <div className="local_stems_and_branches">
          <StemsAndBranches />
        </div>
      </section>

      <footer>
        <p>フッター</p>
      </footer>

    </div>
  )
}

export default Top