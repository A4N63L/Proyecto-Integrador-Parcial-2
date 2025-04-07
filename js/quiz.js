document.addEventListener("DOMContentLoaded", () => {
  // Correct answers
  const correctAnswers = {
    q1: "a", // Application Programming Interface
    q2: "d", // HTML
    q3: "b", // Los servicios son independientes y pueden desplegarse por separado
    q4: "c", // Escalabilidad independiente de componentes
    q5: "b", // POST
    q6: "c", // Swagger/OpenAPI
    q7: "b", // Una plataforma de contenedores
    q8: "a", // Kubernetes
    q9: "a", // Software as a Service
    q10: "b", // Un modelo donde el proveedor de la nube gestiona la infraestructura y asigna recursos automáticamente
  }

  // Answer descriptions
  const answerDescriptions = {
    q1: "API significa Application Programming Interface (Interfaz de Programación de Aplicaciones).",
    q2: "HTML es un lenguaje de marcado, no un tipo de API web. Los tipos comunes son REST, SOAP y GraphQL.",
    q3: "Una característica clave de los microservicios es que son independientes y pueden desplegarse por separado.",
    q4: "La arquitectura de microservicios permite escalar componentes individuales según la demanda.",
    q5: "El método HTTP POST se utiliza típicamente para crear un nuevo recurso en una API RESTful.",
    q6: "Swagger/OpenAPI es una herramienta para documentar APIs.",
    q7: "Docker es una plataforma de contenedores que permite empaquetar aplicaciones y sus dependencias.",
    q8: "Kubernetes es una plataforma de orquestación de contenedores.",
    q9: "SaaS significa Software as a Service (Software como Servicio).",
    q10: "La computación serverless es un modelo donde el proveedor de la nube gestiona la infraestructura y asigna recursos automáticamente.",
  }

  const checkAnswersBtn = document.getElementById("checkAnswers")
  const retryQuizBtn = document.getElementById("retryQuiz")
  const resultsModalElement = document.getElementById("resultsModal")
  const resultsModal = new bootstrap.Modal(resultsModalElement)

  // Check answers when button is clicked
  checkAnswersBtn.addEventListener("click", () => {
    let score = 0
    const answersList = document.getElementById("answersList")
    answersList.innerHTML = ""

    // Check each question
    for (let i = 1; i <= 10; i++) {
      const questionName = `q${i}`
      const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`)

      // Create list item for this question
      const listItem = document.createElement("li")
      listItem.className = "list-group-item"

      // Check if answer is correct
      if (selectedAnswer && selectedAnswer.value === correctAnswers[questionName]) {
        score++
        listItem.innerHTML = `<strong>Pregunta ${i}:</strong> <span class="text-success"><i class="fas fa-check-circle me-1"></i>Correcto</span> - ${answerDescriptions[questionName]}`
      } else {
        listItem.innerHTML = `<strong>Pregunta ${i}:</strong> <span class="text-danger"><i class="fas fa-times-circle me-1"></i>Incorrecto</span> - ${answerDescriptions[questionName]}`
      }

      answersList.appendChild(listItem)
    }

    // Update score display
    const scoreDisplay = document.getElementById("scoreDisplay")
    scoreDisplay.textContent = `${score}/10`

    // Update progress bar
    const scoreProgress = document.getElementById("scoreProgress")
    const percentage = (score / 10) * 100
    scoreProgress.style.width = `${percentage}%`
    scoreProgress.setAttribute("aria-valuenow", percentage)

    // Update score message
    const scoreMessage = document.getElementById("scoreMessage")
    if (score === 10) {
      scoreMessage.textContent = "¡Perfecto! Has respondido correctamente a todas las preguntas."
    } else if (score >= 7) {
      scoreMessage.textContent = "¡Muy bien! Tienes un buen conocimiento de las tecnologías web modernas."
    } else if (score >= 5) {
      scoreMessage.textContent = "¡No está mal! Pero puedes mejorar tu conocimiento sobre tecnologías web modernas."
    } else {
      scoreMessage.textContent = "Necesitas repasar más los temas de tecnologías web modernas."
    }

    // Show results modal
    resultsModal.show()
  })

  // Reset quiz when retry button is clicked
  retryQuizBtn.addEventListener("click", () => {
    document.getElementById("quizForm").reset()
    resultsModal.hide()
  })
})

