function Boton({ texto, color }) {
return (
<button style={{ backgroundColor: color, color: "white",
padding: "10px", border: "none", borderRadius: "5px", margin: "5px"
}}>
{texto}
</button>
);
}
export default Boton;