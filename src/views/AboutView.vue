<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">🗄️ About Our Library</h1>
                <p class="text-center">
                    Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.
                </p>
            </div>
        </div>
    </div>
  </template>

  <script>
  export default {
    name: 'About',
    beforeRouteEnter(to, from, next) {
      // Called before the route that renders this component is confirmed
      next(vm => {
        // Access to the component instance after navigation
        vm.someMethod();
      });
    },
    beforeRouteUpdate(to, from, next) {
      // Called when the route that renders this component has changed
      if (this.someCondition) {
        next();
      } else {
        next(false); // Cancel the navigation
      }
    },
    beforeRouteLeave(to, from, next) {
      // Called when navigating away from the route that renders this component
      if (this.unsavedChanges) {
        const answer = window.confirm('You have unsaved changes. Do you really want to leave?');
        if (answer) {
          next();
        } else {
          next(false); // Cancel the navigation
        }
      } else {
        next();
      }
    },
    methods: {
      someMethod() {
        // Method that runs after navigation
      }
    }
  };
  </script>
  
  <style scoped>

  .container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #e0bfbf; */
  border-radius: 10px;
}

  </style>