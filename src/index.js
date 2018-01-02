document.addEventListener('DOMContentLoaded', function() {
  Adapter.getUsers()
  Goal.attachListeners()
  User.attachListeners()
})


// TO DO:

 //Error in promise on switching users

  // BUGS:

      // When creating new goal, need to update value of form with new id value

      // Resources added to goals as links are now replacing their titles on page refresh,
          //Resources are being assoociated as links,
          //but not persisting

  // NEW:

      // Clicking green check shoud add to current goal based on id in box (element id ='goal-id')
        // It should also reduce the opacity or something to show it's added.
        // The goal should open if it's collapsed to show the new goal

      // Work in Google Api to:

          // store value *from search box*
              //parse that string (one two three) into (one+two+three) - do I have to account for other punctuation?
              //update query portion of fetch with that value
          // on change, update Resources.all() and render to DOM using Resource.getResourcesFromAll()

          // XX populate suggested resources
          // XX have response populate Resources
          // XX make Resource class




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
