<script>
    let rojo = false;
    let verde = false;

    function botonred(){
        const p = document.querySelector('#fake');
        p.style.color = 'red';
    }

    function botongreen(){
        const p = document.querySelector('#fake');
        p.style.color = 'green';
    }
</script>

<div class=nia>
<h1 id=fake>¿En que equipo juega El bicho?</h1>
</div>

<div>
    <button on:click={botonred}>Real Madrid</button>
    <button on:click={botongreen}>Al-Nassr</button>
</div>
<style>
    h1{
        text-align: center;
    }

    div{
       display: flex;
       justify-content: center;
       align-items: center; 
    }

    button{
        margin: 20px;
    }

    .nia{
        margin-top: 10em;
        background-color: rgb(142, 255, 166);
    }
</style>