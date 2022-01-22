import "./Heading.css";

/**
 * Props we'll need:
 *  - id
 *  - children <- a special prop
 */

export function Heading({ id, className, children }) {
  return (
    <>
      {/*
        Although we won't have much code here, we'll use this component 
        quite a few times. Abstracting this code into its own component 
        prevents a lot of duplication that you'd usually find in a normal 
        HTML site.
      */}
      <h2 id={id} className={className}>
        <span>{children}</span>
      </h2>
    </>
  );
}
