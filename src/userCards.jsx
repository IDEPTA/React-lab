
let UserCards = (props) =>{
    return(
        <div className="Card">
                <img className="avatar" src={props.picture.large} alt="" />
            <div className="info">
                <p>Имя: {props.name.first}</p>
                <p>Фамилия: {props.name.last}</p>
                <p>email: {props.email}</p>
                <p>Телефон: {props.phone}</p>
            </div>
        </div>
    )
}

export default UserCards