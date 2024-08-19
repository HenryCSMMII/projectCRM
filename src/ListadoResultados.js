function ListadoResultados(props){
    return (
        <ul>
            {props.resultados.map((elemento) =>
                <li>La suma de {elemento.val1} y {elemento.val2} es {elemento.respuesta}</li>
        )}
        </ul>
    );
}

export default ListadoResultados;