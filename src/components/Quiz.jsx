import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data'; // Importa os dados do quiz

const Quiz = () => {
  const { category } = useParams(); // Obtém a categoria da URL
  const navigate = useNavigate(); // Para navegação entre páginas

  const categoryData = data.categories.find((cat) => cat.category === category); // Encontra a categoria correta

  if (!categoryData) {
    return (
      <div>
        <h2>Perguntas não encontrada</h2>
        <button onClick={() => navigate('/category')}>Voltar para Categorias</button>
      </div>
    );
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionSelect = (option) => {
    if (currentQuestionIndex < categoryData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/final'); // Vai para a tela final ao terminar
    }
  };

  const currentQuestion = categoryData.questions[currentQuestionIndex];

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((option, index) => (
        <button key={index} onClick={() => handleOptionSelect(option)}>
          {option}
        </button>
      ))}
      <button onClick={() => navigate('/category')}>Voltar</button>
    </div>
  );
};

export default Quiz;
