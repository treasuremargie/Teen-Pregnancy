document.getElementById("storyForm").addEventListener("submit", function(e) {
      e.preventDefault();
      var name = document.getElementById("name").value;
      var story = document.getElementById("story").value;

      var storyDiv = document.createElement("div");
      storyDiv.className = "card p-3 mb-3";
      var storyTitle = document.createElement("h5");
      storyTitle.textContent = name + "'s Story";
      var storyText = document.createElement("p");
      storyText.textContent = story;

      storyDiv.appendChild(storyTitle);
      storyDiv.appendChild(storyText);

      document.getElementById("submittedStories").appendChild(storyDiv);
      document.getElementById("storyForm").reset();
    });