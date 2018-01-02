document.addEventListener('DOMContentLoaded', function() {
  Adapter.getUsers()
  Goal.attachListeners()
  User.attachListeners()
})


// TO MAKE IT RUN:

  // Comment in Resource line 5 and comment out line 3
  // Comment in Goal line 72, out line 73 (74 also might be a problem - comment out )
  // Comment in Goal 188


// TO DO:

 //Error in promise on switching users
 //Change Submit button to Update for existing goal
 //Change Enter a New Goal to Update Goal on selecting goal
 //Create functionality to complete goals, appending to completed goals div

  // BUGS:




  // NEW:

      // Clicking goal should get resources

      // XX Clicking green check shoud add to current goal based on id in box (element id ='goal-id')
        // It should also reduce the opacity or something to show it's added.
        // The goal should open if it's collapsed to show the new goal

      // Deleting goal or deleting resource should have some animiation/ transition



      // Work in Google Api to:

          // XX store value *from search box*
              // XX parse that string (one two three) into (one+two+three) - do I have to account for other punctuation?
              // XX update query portion of fetch with that value
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
      // XX When creating new goal, need to update value of form with new id value
      // XX Resources added to goals as links are now replacing their titles on page refresh,
      // XX Resources are being assoociated as links,
      //but not persisting
