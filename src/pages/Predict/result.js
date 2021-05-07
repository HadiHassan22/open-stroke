import { Button, Paper } from "@material-ui/core";

const Result = (props) => {
  return (
    <div>
      <Paper style={{ marginBottom: 25, height: 500, padding: 30 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.stroke === 1 ? (
            <>
              <h3>Watch out! You are at risk of stroke.</h3>
              <img
                src={"/siren.svg"}
                alt="stroke"
                style={{ height: 100, maxWidth: 280, justifySelf: "center" }}
              />
              <h4>You should seek your medical professional immediately.</h4>
            </>
          ) : (
            <>
              <h3>Congratulations you are not at risk of stroke</h3>
              <img
                src={"/heart.svg"}
                alt="no-stroke"
                style={{ height: 150, maxWidth: 280, justifySelf: "center" }}
              />
            </>
          )}
          <p>
            Learn how to prevent strokes by checking out the the official
            sources.
          </p>
          <p>
            for more information on how to stay healthy and minimize risk click
            here.
          </p>
        <a href="/about">Learn More</a>
        </div>
      </Paper>
    </div>
  );
};

export default Result;
