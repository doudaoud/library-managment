import React from 'react'

export default function Register() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>Inscription</h1>
        <form action="/register" method="POST">
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Nom complet</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Adresse Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Mot de passe</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} 
            />
          </div>
          <button 
            type="submit" 
            style={{ width: '100%', padding: '12px', backgroundColor: '#2ecc71', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            S'inscrire
          </button>
        </form>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>Déjà un compte ? <a href="/login" style={{ color: '#3498db', textDecoration: 'none' }}>Se connecter</a></p>
        </div>
      </div>
    </div>
  )
}