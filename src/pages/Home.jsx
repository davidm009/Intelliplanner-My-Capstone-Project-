const Home = () => {
    return (
      <div className="home-container">
        <div className="home-text">
          <h2>Welcome to Intelliplanner!</h2>
          <p>Hey there! Welcome to Intelliplanner! There are several tools here that you can use for your 
            daily productivity and tasks. The purpose of this application is to make your life easier 
            by having multiple productivity tools in one package. For example, now you won’t have to 
            switch between a notes app, a schedule app, or a to-do list app. You’ll finally have 
            an all-in-one package to get everything done! I hope this app helps. I will expand a bit 
            more on what you can do below.</p>
            <h3>Todo List</h3>
            <p>The Todo List page lets you create and add all of your tasks to a list. This will
                help you manage everything that needs to get done. You can add tasks, mark them as completed,
                set a time for when they should be completed, and delete them when you no longer need them.
            </p>
            <h3>Schedule</h3>
            <p>The Schedule page lets you organize your daily events on a daily schedule. It lets you plan 
             out your day by creating events and setting a specific time period for each event. Each event will appear as a block 
             of time on the schedule. You can also delete events when they are no longer needed.
            </p>
            <h3>Weekly Planner</h3>
            <p>The Weekly Planner page allows you to assign events and tasks to specific days of the week.
                This will allow you to plan out your week in advance. You will be able to create tasks and events for the specific days that you choose.
                The weekly planner is a great way to balance out your tasks for the week.
            </p>
            <h3>Notes</h3>
            <p>The Notes page allows you to type in the notes that you need to study. You will be 
                able to create text boxes where you can type in your notes. You will also be able 
                to delete notes that you no longer need. The Notes page is a great way to keep track
                of what you're learning and study what you need to know.
            </p>
            <h3>Artificial Intelligence</h3>
            <p>The Artificial Intelligence page will allow you to ask questions to an AI assistant that will help you. 
                You can ask questions about your notes or even ask the AI to optimize your schedule or todo list. You can
                have back and forth conversations with the AI to make sure you get all the information that you need. 
            </p>
        </div>
        <div className="home-images">
          <img src="/image1.png" alt="Image 1" style={{ width: '400px', height: 'auto' }} />
          <img src="/image2.png" alt="Image 2" style={{ width: '400px', height: 'auto' }} />
          <img src="/image3.png" alt="Image 3"  style={{ width: '400px', height: 'auto' }} />
        </div>
      </div>
    );
  };

  export default Home;









