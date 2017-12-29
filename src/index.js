document.addEventListener('DOMContentLoaded', function() {
  Adapter.getUsers()
  Goal.attachListeners()
  User.attachListeners()
  Link.attachListeners()
  Adapter.getResources()
})


// TO DO:



  // NEW:


      // Work in Google Api to populate suggested resources
          // store value from search box
              //update query portion of fetch with that value
          // have response populate Resources
              // make Resource class
          // on change, update Resources.all() and render to DOM

      // Make collapse specific to that goal, close all others
          //on update, selected task should be expanded


      // Create add link functionality from Suggested Resources to Goals

      // Add user profiles
          // Add ruby Paperclip gem for pic uploading to profiles
              // try incorporating that in notes


  // BUGS:



// COMPLETED:

  // NEW:

      // XX Set up patch on form to update Goal
      // XX First, populate form with data when clicking on form

      // XX Next, create an update button, or use the Evernote style of creating a blank note and updating/ autosaving


  // BUGS:

      // XX Links don't populate when switching users
      // XX Links don't open in new window
