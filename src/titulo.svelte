<script>
    let nombres = ['Cristiano', 'El bicho', 'El comandante', 'El siuu', 'Ronaldo', 'Mr. Champions', 'El fenómeno'];
    let nombre_actual = 0

    function cambiar_nombre() {
    nombre_actual = (nombre_actual + 1) % nombres.length;
    }

    setInterval(cambiar_nombre, 2000);
</script>

<div>
<h1>¿Qué tanto sabes de {nombres[nombre_actual]}?</h1>
</div>

<style>
    h1{
        text-align: center;
        color: aliceblue;
    }

    div{
        margin: 0;
        background-color: darkblue;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center; 
    }
</style>