const IndexPage = () => {
    return <div className="App container">
    <div className="side-bar">
      <ul>
        <li>
          <a href="#what-we-are-building">What We Are Building.</a>
        </li>
        <li>
          <a href="#draw-the-body-shape">Draw the Body Shape.</a>
        </li>
        <li>
          <a href="#add-the-bones">Add the Bones.</a>
        </li>
        <li>
          <a href="#group-the-shape">Group the Shape.</a>
        </li>
        <li>
          <a href="#bind-the-bones">Bind the Bones.</a>
        </li>
        <li>
          <a href="#link-the-nodes">Link the Nodes.</a>
        </li>
        <li>
          <a href="#position-the-bones">Position the Bones.</a>
        </li>
      </ul>
    </div>
    <div className="main-page">
      <h1>Adding Bones</h1>
      <h2>
        <a name="what-we-are-building">What we are building</a>
      </h2>
      <div>This is what we are trying to set up.</div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/adding-bones/videos/step5.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="draw-the-body-shape">1. Draw the Body Shape</a>
      </h2>
      <div>
        <p>
          Using the pen tool, draw out the shape that is going to be used.
        </p>
        <p>Place nodes where you are going to want the shape to bend.</p>
      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/adding-bones/videos/step0.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="add-the-bones">2. Add the Bones</a>
      </h2>
      <div>
        <p>Clicking on the Bones tool, add two bones.</p>
      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/adding-bones/step1.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="group-the-shape">3. Group the Shape</a>
      </h2>
      <div>
        <p>Drag the Body shape onto the root bone.</p>
        <p>This will create a new group.</p>
      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/adding-bones/videos/step2.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="bind-the-bones">4. Bind the Bones</a>
      </h2>
      <div>
        <p>Click on the Body Path.</p>
        <p>Click the Bind Bones Button.</p>
        <p>
          Click the <b>root bone</b> in the object panel (left side).
        </p>
        <p>Click the Bind Bones Button.</p>
        <p>
          Click the <b>bone1</b> in the object panel (left side).
        </p>
      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/adding-bones/videos/step3.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="link-the-nodes">Link the Nodes to the Bones</a>
      </h2>
      <div>
        <p>Click on the Body Path.</p>
        <p>Press enter to edit the path. You will see the white nodes</p>
        <p>
          Select the top right node. This node should be 0% of the root bone,
          and 100% of the bone 1.
        </p>
        <p>
          Select the center right node. This node should be 50% of the root
          bone, and 50% of the bone 1.
        </p>
        <p>
          Select the bottom right node. This node should be 100% of the root
          bone, and 0% of the bone 1.
        </p>
        <p>Repeat the same numbers for the left side.</p>
      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/adding-bones/videos/step4.mp4" type="video/mp4" />
      </video>

      <h2>
        <a name="position-the-bones">Position the Bones</a>
      </h2>
      <div>
        <p>You can now position the bones for the animation.</p>
      </div>
      <video allowFullScreen autoPlay muted controls width="400px">
        <source src="/adding-bones/videos/step5.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
}

export default IndexPage;