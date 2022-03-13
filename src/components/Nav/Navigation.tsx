import Button from "./Button"

const Navigation = () => {
  return (
    <div className="navigation">
      <Button title = "誕生日占い" id = "1"/>
      <Button title = "血液型占い" id = "2"/>
      <Button title = "星座占い"   id = "3"/>
      <Button title = "名前占い"   id = "4"/>
      <Button title = "干支占い"   id = "5"/>
    </div>
  )
}

export default Navigation