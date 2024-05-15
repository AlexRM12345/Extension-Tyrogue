// Define el estado inicial del tamagotchi
let tamagotchi = {
    nombre: "Tamagotchi",
    hambre: 50,
    felicidad: 50,
    energia: 50
  };
  
  // Función para reducir aleatoriamente las estadísticas
  function reducirEstadisticas() {
    tamagotchi.hambre -= generarAleatorio(3, 10);
    tamagotchi.felicidad -= generarAleatorio(5, 15);
    tamagotchi.energia -= generarAleatorio(4, 10);
    actualizarEstado();
  }
  
  // Función para alimentar al tamagotchi
  function alimentar() {
    tamagotchi.hambre += 10;
    actualizarEstado();
  }
  
  // Función para jugar con el tamagotchi
  function jugar() {
    tamagotchi.felicidad += 10;
    tamagotchi.energia -= 10;
    actualizarEstado();
  }
  
  // Función para hacer dormir al tamagotchi
  function dormir() {
    tamagotchi.energia += 20;
    actualizarEstado();
  }
  
  // Función para generar un número aleatorio en un rango dado
  function generarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Función para actualizar el estado del tamagotchi en la interfaz de usuario
  function actualizarEstado() {
    document.getElementById('nombre').innerText = tamagotchi.nombre;
    document.getElementById('hambre').innerText = tamagotchi.hambre;
    document.getElementById('felicidad').innerText = tamagotchi.felicidad;
    document.getElementById('energia').innerText = tamagotchi.energia;
  
    // Verifica si alguna estadística llega a cero
    if (tamagotchi.hambre <= 0 || tamagotchi.felicidad <= 0 || tamagotchi.energia <= 0) {
        alert("¡Tu tamagotchi ha fallecido!");
        reiniciarTamagotchi();
        // Muestra la imagen de muerte y oculta los demás elementos
        document.getElementById('imagenMuerte').style.display = 'inline';
        document.getElementById('nombre').style.display = 'none';
        document.getElementById('hambre').style.display = 'none';
        document.getElementById('felicidad').style.display = 'none';
        document.getElementById('energia').style.display = 'none';
        document.getElementById('alimentar').style.display = 'none';
        document.getElementById('jugar').style.display = 'none';
        document.getElementById('dormir').style.display = 'none';
    } else if (tamagotchi.felicidad >= 100) {
      // Si la felicidad es 100 o más, muestra el GIF de la mascota feliz y oculta los demás
      document.getElementById('mascotaNormal').style.display = 'none';
      document.getElementById('mascotaLlena').style.display = 'inline';
      document.getElementById('mascotaHappy').style.display = 'none';
      document.getElementById('mascotaDormir').style.display = 'none';
    } else if (tamagotchi.hambre >= 100) {
      // Si el hambre es 100 o más, muestra el GIF de la mascota comida y oculta los demás
      document.getElementById('mascotaNormal').style.display = 'none';
      document.getElementById('mascotaLlena').style.display = 'none';
      document.getElementById('mascotaHappy').style.display = 'inline';
      document.getElementById('mascotaDormir').style.display = 'none';
    } else if (tamagotchi.energia >= 100) {
      // Si la energía es 100 o más, muestra el GIF de la mascota energía y oculta los demás
      document.getElementById('mascotaNormal').style.display = 'none';
      document.getElementById('mascotaLlena').style.display = 'none';
      document.getElementById('mascotaHappy').style.display = 'none';
      document.getElementById('mascotaDormir').style.display = 'inline';
    } else {
      // Si ninguna estadística alcanza el nivel deseado, muestra el GIF de la mascota normal y oculta los demás
      document.getElementById('mascotaNormal').style.display = 'inline';
      document.getElementById('mascotaLlena').style.display = 'none';
      document.getElementById('mascotaHappy').style.display = 'none';
      document.getElementById('mascotaDormir').style.display = 'none';
    }
  }
  
  // Función para reiniciar el tamagotchi
  function reiniciarTamagotchi() {
    tamagotchi = {
      nombre: "Tamagotchi",
      hambre: 50,
      felicidad: 50,
      energia: 50
    };
    actualizarEstado();
  }
  
  // Event listeners para los botones de la interfaz
  document.getElementById('alimentar').addEventListener('click', alimentar);
  document.getElementById('jugar').addEventListener('click', jugar);
  document.getElementById('dormir').addEventListener('click', dormir);
  
  // Reducir las estadísticas aleatoriamente cada 3 segundos
  setInterval(reducirEstadisticas, 2000);
  
  // Actualiza el estado inicial del tamagotchi en la interfaz de usuario
  actualizarEstado();
  