
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Final = () => {
  const navigate = useNavigate(); // Para navegação entre páginas

  const handleRestart = () => {
    navigate('/category'); // Volta para a tela de categorias
  };

  return (
    <div style={styles.container}>
      <h2>Parabéns! Você completou o quiz!</h2>
      <button style={styles.button} onClick={handleRestart}>
        Voltar
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '15px',
    backgroundColor: '#07D962', // Cor do botão
    color: 'white',
    borderRadius: '10px',
  },
};

export default Final;
