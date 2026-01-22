import React from 'react'

export default function Login() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>Connexion</h1>
        <form action="/login" method="POST">
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
            style={{ width: '100%', padding: '12px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Se connecter
          </button>
        </form>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <a href="/" style={{ color: '#7f8c8d', textDecoration: 'none', fontSize: '0.9rem' }}>Retour à l'accueil</a>
        </div>
      </div>
    </div>
  )
}