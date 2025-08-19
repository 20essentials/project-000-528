import React from "react";
import ReactDOM from "react-dom/client";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  global: {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      fontFamily:
        "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
    },
    "a": {
      WebkitTapHighlightColor: "transparent",
    },
    "html": {
      scrollBehavior: "smooth",
      scrollbarWidth: "thin",
      scrollbarColor: "transparent transparent",
    },
    "body": {
      height: "100vh",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      placeContent: "center",
      backgroundColor: "#000",
    },
    "@keyframes move": {
      "0%": { backgroundPositionX: "0px" },
      "100%": { backgroundPositionX: "800px" },
    },
  },
  container: {
    position: "relative",
    backgroundColor: "#fff1",
    width: "200px",
    height: "200px",
    boxShadow: "inset 0 0 10px 1px #0008",
    borderRadius: "50%",
    overflow: "hidden",
    "::before": {
      content: '""',
      position: "absolute",
      bottom: "-110px",
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "url('assets/wave.png')",
      backgroundRepeat: "repeat-x",
      backgroundSize: "400px",
      animationName: "move",
      animationDuration: "2s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      animationDirection: "alternate",
    },
    "::after": {
      content: '""',
      position: "absolute",
      bottom: "-110px",
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "url('assets/wave.png')",
      backgroundRepeat: "repeat-x",
      backgroundSize: "400px",
      animationName: "move",
      animationDuration: "2s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      animationDirection: "alternate",
      filter: "blur(10px) saturate(900%)",
    },
  },
});

function App() {
  return <aside {...stylex.props(styles.container)} />;
}

const root = document.createElement("div");
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <style {...stylex.props(styles.global)} />
    <App />
  </React.StrictMode>
);
