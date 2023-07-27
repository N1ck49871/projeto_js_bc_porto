import { quiz1 } from "./quiz1.js";
import { quiz2 } from "./quiz2.js";
import { quiz3 } from "./quiz3.js";

const temas = [
  quiz1,
  quiz2,
  quiz3
];


  const sectionPerguntas = document.getElementById('quiz');
  const sectionResultados = document.getElementById('results');
  const btnConcluir = document.getElementById('submit');
  
  mostrarQuiz(temas[1], sectionPerguntas, sectionResultados, btnConcluir);
  
  function mostrarQuiz(perguntas, sectionPerguntas, sectionResultados, btnConcluir){
  
    function mostrarPerguntas(perguntas, sectionPerguntas){
      let output = [];
      let alternativas;
  
      for(let i=0; i<perguntas.length; i++){
        
        alternativas = [];
  
        for(let p in perguntas[i].alternativas){
  
          alternativas.push(
            '<label>'
              + '<input type="radio" name="pergunta'+i+'" value="'+p+'">'
              + p + ': '
              + perguntas[i].alternativas[p]
            + '</label>'
          );
        }
          output.push(
          '<div class="pergunta">' + perguntas[i].pergunta + '</div>'
          + '<div class="alternativas">' + alternativas.join('') + '</div>'
        );
      }
        sectionPerguntas.innerHTML = output.join('');
    }
  
    let respostasUsuario = '';
    let vetorRespostas = [];
    function showResults(perguntas, sectionPerguntas, sectionResultados){
      
      let sectionRespostas = sectionPerguntas.querySelectorAll('.alternativas');
      
      respostasUsuario;
      let numCertas = 0;  
    
      for(let i=0; i<perguntas.length; i++){
        respostasUsuario = (sectionRespostas[i].querySelector('input[name=pergunta'+i+']:checked')||{}).value;
        if(respostasUsuario===perguntas[i].resposta){
          numCertas++;
          sectionRespostas[i].style.color = 'lightgreen';
        }
        else{
          sectionRespostas[i].style.color = 'red';
        }
      }
      sectionResultados.innerHTML = numCertas + ' de ' + perguntas.length;
    }
  
    mostrarPerguntas(perguntas, sectionPerguntas);
    
    btnConcluir.onclick = function(){
      showResults(perguntas, sectionPerguntas, sectionResultados);
      console.log(vetorRespostas);
    }
  }