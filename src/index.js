document.addEventListener('DOMContentLoaded', function() {
  Adapter.getUsers()
  // Adapter.getCurrentUser()
  // Adapter.getGoals()
  Goal.attachListeners()
  User.attachListeners()
})
