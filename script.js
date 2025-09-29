function addInteractiveEffects() {
  const projectItems = document.querySelectorAll(".project-item")
  projectItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
      this.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.15)"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)"
    })
  })

  const skillTags = document.querySelectorAll(".skill-tag")
  skillTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      this.style.backgroundColor = "#2980b9"
      setTimeout(() => {
        this.style.backgroundColor = "#3498db"
      }, 200)
    })
  })
}

document.addEventListener("DOMContentLoaded", () => {
  addInteractiveEffects()
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease-in"
    document.body.style.opacity = "1"
  }, 100)
})
