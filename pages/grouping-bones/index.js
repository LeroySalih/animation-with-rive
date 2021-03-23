const IndexPage = () => {
    return <div className="App container">
    <div className="side-bar">
      <ul>
      <li>
          <a href="#draw-the-body-shape">1. Draw the body shape.</a>
        </li>
        <li>
          <a href="#add-the-spine">2. Add the Spine.</a>
        </li>
        <li>
          <a href="#add-leg-bones">3. Add Leg Bones.</a>
        </li>
        <li>
          <a href="#add-arm-bones">4. Add Arm Bones.</a>
        </li>
        <li>
          <a href="#group-the-bonese">5. Group the Bones.</a>
        </li>
        <li>
          <a href="#add-shapes-to-the-bones">6. Add Shapes to the Bones.</a>
        </li>
        <li>
          <a href="#bind-the-bones">7. Bind the Bones.</a>
        </li>
        <li>
          <a href="#select-the-bone-weightings">8. Select the Bone Weightings.</a>
        </li>
      </ul>
    </div>
    <div className="main-page">
      <h1>Grouping Bones</h1>
      <h2>
        <a name="what-we-are-building">What we are building</a>
      </h2>
      <div>This is what we are trying to set up.</div>
      <img src="grouping-bones/videos/target.png"></img>

      <h2>
        <a name="draw-the-body-shape">1. Draw the Body Shapes</a>
      </h2>
      <div>
        <p>
          Using the pen tool, draw out each of the seperate shapes that we are going to use.
        </p>
        <p>
          You will have a <ul>
            <li>Head</li>
            <li>Body</li>
            <li>Leg</li>
            <li>Arm</li>
          </ul>
        </p>
        
      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/grouping-bones/videos/Step0.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="add-the-spine">2. Add the Spine</a>
      </h2>
      <div>
        <p>Clicking on the Bones tool, add the spine bone.  This will be the bone that controlls all other bones. </p>
        <p>Note that the spine bone starts at the bottom and travels up.</p>
      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/grouping-bones/videos/Step1.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="add-leg-bones">3. Add the leg bones.</a>
      </h2>
      <div>
        <p>Add three seperate bones for the leg.</p>
        <p>Remember to rename the bones.</p>
      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/grouping-bones/videos/Step2.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="add-arm-bones">4. Add the arm bones.</a>
      </h2>
      <div>
        <p>Add two bones for the arms.</p>
        <p>Rename the bones</p>
        <p>Ensure that the bones start at the shoulder and work down toward the hand.</p>
      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
      <source src="/grouping-bones/videos/Step3.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="group-the-bones">5. Group the bones</a>
      </h2>
      <div>
        <p>Drag and drop the Arm and Leg bones onto the spine to form a group.</p>
        <p>Test this arrangement by moving the spine, and checking that the arms and legs move too.</p>

      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/grouping-bones/videos/Step4.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="add-shapes-to-the-bones">6. Add shapes to the bones</a>
      </h2>
      <div>
        <p>Drag the head shape onto the spine bone.</p>
        <p>Drag the body shape onto the spine bone.</p>
        <p>Drag the arm shape onto the arm bone.</p>
        <p>Drag the leg shape onto the leg bone.</p>

      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/grouping-bones/videos/Step5.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="bind-the-bones">7. Bind the bones to the shapes.</a>
      </h2>
      <div>
        <p>Selecting the leg path, press enter. Press Bind Bones.  Add the leg bones.</p>
        <p>Selecting the arm path, press enter. Press Bind Bones.  Add the arm bones.</p>
        
      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/grouping-bones/videos/Step6.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="select-the-bone-weightings">8. Select the bone weightings.</a>
      </h2>
      <div>
        <p>Select the Leg path, press enter to see the nodes (white circles)</p>
        <p>Select the correct wieghts for each node</p>
        <p>Each node should be either 100% of the bone next to it or 50% if it is shared between 2 bones.</p>
        <p></p>
        
      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/grouping-bones/videos/Step7.mp4" type="video/mp4" />
      </video>

      <h2>Congratulations!</h2>
      <p>Submit your work</p>
    </div>
  </div>
}

export default IndexPage;