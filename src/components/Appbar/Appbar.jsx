import "./Appbar.css";

export function Appbar() {
  return (
    <header>
      {/*
        Let's get started! We'll walk through this one together.
        Here's what we need:
          - The purple background that will stick to the top of the screen.
          - Our name aligned to the left.
          - Our 3 links for navigating between the sections.

        A lot of the code here is going to look like normal HTML which
        is part of the beauty of React! React leverages JSX which allows us 
        to use our HTML knowledge to build accessible and easy to understand 
        applications.
      */}
      <div className="headerContent">
        <span className="headerName">Zaina Shawar</span>
        <div className="navLinks">
          <a href="#Home">About</a>
          <a href="#Projects">Project</a>
          <a href="#Experience">Experience</a>
        </div>
      </div>
    </header>
  );
}
