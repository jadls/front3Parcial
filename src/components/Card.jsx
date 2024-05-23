import CardStyles from '../Styles/Card.module.css' 
const Card = ({info}) => {
  return (
    // <div className={CardStyles.cardContainer}>
    <div>
      <h3>Hola {info.nombre}!</h3>
      <h3>Sabemos que tu mascota preferida es:</h3>
      <h3 style={{color: "white", backgroundColor: "green"}}>{info.mascota}</h3>
    </div>
  )
}

export default Card