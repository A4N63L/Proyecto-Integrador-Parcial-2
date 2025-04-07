// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

  // Initialize popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl))

  // Toast functionality for the containers page
  const showToastBtn = document.getElementById("showToastBtn")
  if (showToastBtn) {
    showToastBtn.addEventListener("click", () => {
      const containerToast = document.getElementById("containerToast")
      const toast = new bootstrap.Toast(containerToast)
      toast.show()
    })
  }

  // Spinner simulation for the containers page
  const spinnerContainer = document.getElementById("spinnerContainer")
  const containerTechnologies = document.getElementById("containerTechnologies")
  if (spinnerContainer && containerTechnologies) {
    setTimeout(() => {
      spinnerContainer.classList.add("d-none")
      containerTechnologies.classList.remove("d-none")
    }, 2000)
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Fix for undeclared bootstrap variable
  const bootstrap = window.bootstrap
})

