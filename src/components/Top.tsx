import Navigation from "./Nav/Navigation"
import Birthday from "./Birthday";
import BloodType from "./BloodType";
import Constellation from "./Constellation";
import Name from "./Name";
import StemsAndBranches from "./StemsAndBranches";

const Top = () => {
  return (
    <div className="main">

      <header>
        <a href="/">
          LOGO
        </a>
        <Navigation />
        <h1>サルベージの占いコーナー</h1>
        <p>世界を揺るがすほどの占い成績をもつ、</p>
        <p>あの、サルベージが公式に無料で占いコーナーを設立！！</p>
        <p>あなたの未来が必ず変えられる！？</p>
        <p>※お客さまが行動なさったことに関しては、当サイト関係者は一切の責任を負いかねます。</p>       <p>xxxxxxxxxxxxx</p>
      </header>

        <section className="common">
          <div className="birthday">
            <h1>あなたの誕生日から運命の人を導き出す！！</h1>
            <button><a href="/birthday">誕生日占いへ</a></button>
          </div>
        </section>

        <section className="common">
          <div className="blood_type">
            <h1>あなたの血液型から金運を導き出す！！</h1>
            <button><a href="/blood_type">血液型占いへ</a></button>
          </div>
        </section>

        <section className="common">
          <div className="constellation">
            <h1>あなたの星座から仕事を導き出す！！</h1>
            <button><a href="/constellation">星座占いへ</a></button>
          </div>
        </section>

        <section className="common">
          <div className="name">
            <h1>あなたの名前から運命の職業を導き出す！！</h1>
            <button><a href="/name">名前占いへ</a></button>
          </div>
        </section>

        <section className="common">
          <div className="stems_and_branches">
            <h1>あなたの干支から来世の自分がわかります！！</h1>
            <button><a href="/stems_and_branches">干支占いへ</a></button>
          </div>
        </section>

      <footer>
        <p>フッター</p>
      </footer>

    </div>
  )
}

export default Top