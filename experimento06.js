const botaoAbrir = document.getElementById("btnAbrirModal");
console.log(botaoAbrir)
const modalContainer = document.getElementById("modalContainer");

botaoAbrir.addEventListener("click", function(){
    modalContainer.innerHTML = 
            <div class="modal-fundo">
                <div class="modal-caixa">
                    <h2>Aviso!</h2>
                    <p> Este modal inteiro foi criado pelo javaScript.</p>
                    <button id="btnFechaModal">Fecha</button>
                </div>
            </div>;

            const botaoFechar = document.getElementById("btnFechaModal");
                botaoFechar.addEventListener("click", function(){
                    modalContainer.innerHTML = "";
                })
})