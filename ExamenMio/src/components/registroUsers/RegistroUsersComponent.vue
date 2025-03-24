<script setup>
import { ref } from 'vue';

const usuarios = ref([]);
const nombre = ref('');
const email = ref('');
const contraseña = ref('');


const añadirUsuario = () => {
    if(nombre.value === '' || email.value === '' || contraseña.value === ''){
        alert('Por favor, completa todos los campos.');
        return
    }else{
        alert('Usuario registrado correctamente');
    }

    usuarios.value.push({nombre: nombre.value, email: email.value, contraseña: contraseña.value});
    
    // Limpiamos input
    nombre.value = ''
    email.value = ''
    contraseña.value = ''
}


</script>

<template>
    <h1>Registro de Usuarios</h1>
    <div>
        <input v-model="nombre" type="text" placeholder="Nombre" />
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="contraseña" type="password" placeholder="Contraseña" />
        <button @click="añadirUsuario">Registrar Usuario</button>
    </div>

    <h2>Usuarios Registrados</h2>
    <p>Email de ITB: verde || Email no ITB: rojo</p>
    <p>-----------------------</p>
    <div v-for="(usuario, index) in usuarios" :key="index" :class="{emailITB: usuario.email.includes('@itb.cat'), emailExterno: !usuario.email.includes('@itb.cat')}">
        <span>Nombre:</span> {{ usuario.nombre }}<br>
        <span>Email:</span> {{ usuario.email }}<br>
    </div>
    <p>-----------------------</p>

</template>

<style scoped>
.emailITB{
    color: green;
}

.emailExterno{
    color: red;
}
</style>