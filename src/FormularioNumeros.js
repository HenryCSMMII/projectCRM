function FormularioNumeros(props){
    return (
        <form onSubmit={props.onSumar}>
            <p>Ingrese su primer valor:
                <input type="text" name="valor1"/>
            </p>
            <p>Ingrese su segundo valor:
                <input type="text" name="valor2"/>
            </p>
            <input type="submit" value="sumar"/>
        </form>
    );
}

export default FormularioNumeros;