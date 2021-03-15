const IndexPage = () => {
    return <div className="container">
                <h1>Adding Bones</h1>
                <div className="page-layout">
                    <div className="side-bar">
                        <ul>
                            <li><a href="#what-we-are-going-to-build">What We are Going to Build</a></li>
                            <li><a href="#add-path-to-be-transformed">Add Path</a></li>
                            <li><a href="#add-bones">Add Bones</a></li>
                        </ul>
                    </div>
                    <div className="main-page">
                        <h2>What we are aiming to build</h2>
                        <h3>LO: Adding bones to create smooth transformations</h3>
                        
                        <a name="what-we-are-going-to-build"></a><h3>What We are Going to be Making.</h3>
                        <video width="640" height="480" controls>
                            <source src="/adding-bones/videos/step0.mp4"></source>
                        </video>
                        <ul>
                            <li>Instructions Go Here..</li>
                        </ul>


                        <a name="add-path-to-be-transformed"></a><h3 name="">Add a Path To Be Transformed.</h3>
                        <video width="640" height="480" controls>
                            <source src="/adding-bones/videos/step1.mp4"></source>
                        </video>
                        <ul>
                            <li>Instructions Go Here..</li>
                        </ul>


                        <a name="add-bones"></a><h3 name="add-bones">Add bones.</h3>
                        <video width="640" height="480" controls>
                            <source src="/adding-bones/videos/step2.mp4"></source>
                        </video>
                        <ul>
                            <li>Instructions Go Here..</li>
                        </ul>

                        <a name="add-bones"></a><h3 name="add-bones">Add bones.</h3>
                        <video width="640" height="480" controls>
                            <source src="/adding-bones/videos/step3.mp4"></source>
                        </video>
                        <ul>
                            <li>Instructions Go Here..</li>
                        </ul>


                    </div>
                </div>
        
        </div>
}

export default IndexPage;