import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

const Category = () => {
  return (
    <div style={styles.container}>
      <h1>Escolha uma Categoria</h1>
      {data.categories.map((category, index) => (
        <Link
          key={index}
          to={`/quiz/${category.category}`} // Usa a chave "category"
          style={styles.button}
        >
          {category.category} {/* Mostra o nome da categoria */}
        </Link>
      ))}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#07D962', // Cor do botão
    color: 'white',
    textDecoration: 'none',
    borderRadius: '10px',
    margin: '10px',
  },
};

export default Category;
