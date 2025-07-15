const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

async function testBackend() {
  try {
    console.log('🔍 Probando conexión al backend...');
    
    // 1. Probar conexión básica
    const productsResponse = await axios.get(`${BASE_URL}/products`);
    console.log('✅ GET /products - Conexión exitosa');
    
    // 2. Probar registro de usuario
    console.log('🔍 Probando registro de usuario...');
    const registerResponse = await axios.post(`${BASE_URL}/users/register`, {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    });
    console.log('✅ Registro exitoso:', registerResponse.data);
    
    // 3. Probar login
    console.log('🔍 Probando login...');
    const loginResponse = await axios.post(`${BASE_URL}/users/login`, {
      email: 'test@example.com',
      password: 'password123'
    });
    console.log('✅ Login exitoso:', loginResponse.data);
    
    const token = loginResponse.data.token;
    console.log('🔑 Token generado:', token ? 'Presente' : 'Ausente');
    
    // 4. Probar petición protegida
    console.log('🔍 Probando petición protegida...');
    const protectedResponse = await axios.post(`${BASE_URL}/products`, {
      name: 'Test Product',
      description: 'Test Description',
      price: 100
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('✅ Petición protegida exitosa:', protectedResponse.data);
    
    console.log('🎉 Todas las pruebas pasaron exitosamente!');
    
  } catch (error) {
    console.error('❌ Error en la prueba:', error.response?.data || error.message);
    if (error.response?.status === 401) {
      console.log('🔍 Error 401 - Token requerido o inválido');
    } else if (error.response?.status === 403) {
      console.log('🔍 Error 403 - Token inválido');
    }
  }
}

testBackend(); 