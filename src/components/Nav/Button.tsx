type FromPropsType = {
  title: string;
  id: string;
}

const Button = ({title, id}: FromPropsType) => {
  return (
    <div className="navBtn" id={id}>{title}</div>
  )
}

export default Button