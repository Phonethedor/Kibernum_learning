$(document).ready(function() {
        $('#carouselExampleAutoplaying').carousel({
            interval: 5000
        });
        
        $('#listaProductos').on('click', '.btn-favorito', function() {
            
            const $button = $(this);
            const $card = $button.closest('.producto-card'); 
            const nombreProducto = $card.find('.card-title').text();
            
            let esFavorito = $button.data('favorito');
            let mensaje = "";
            let claseToast = "";
            
            if (esFavorito === false) {
                $button.data('favorito', true);
                $button.removeClass('btn-outline-danger').addClass('btn-danger');                
                $card.addClass('favorito-resaltado');
                $button.find('i').removeClass('far fa-heart').addClass('fas fa-heart');
                $button.html('<i class="fas fa-heart"></i> Eliminar de Favoritos');
                mensaje = `❤️ **${nombreProducto}** añadido a tus favoritos.`;
                claseToast = "bg-success";
                
            } else {
                $button.data('favorito', false);
                $button.removeClass('btn-danger').addClass('btn-outline-danger');                
                $card.removeClass('favorito-resaltado');
                $button.find('i').removeClass('fas fa-heart').addClass('far fa-heart');
                $button.html('<i class="far fa-heart"></i> Añadir a Favoritos');
                mensaje = `💔 **${nombreProducto}** eliminado de tus favoritos.`;
                claseToast = "bg-warning text-dark";
            }
            const toastElement = document.getElementById('toastMensaje');
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement);
            $(toastElement).removeClass().addClass(`toast align-items-center text-white border-0 ${claseToast}`);
            $('#toastBody').html(mensaje);
            
            toastBootstrap.show();
        });
        
    });