<script>
    let rojo = false;
    let verde = false;

    function botonred(){
        const p = document.querySelector('#fake1');
        p.style.color = 'red';
    }

    function botongreen(){
        const p = document.querySelector('#fake1');
        p.style.color = 'green';
    }
</script>

<div class="nia">
<h1 id=fake1>¿Cuántos goles tiene el bicho?</h1>
</div>

<div>
    <button on:click={botongreen}>824</button>
    <button on:click={botonred}>731</button>
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