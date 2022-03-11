type FromPropsType = {
  title: string;
}

const Button = ({title}: FromPropsType) => {
  return (
    <button>{title}</button>
  )
}

export default Button