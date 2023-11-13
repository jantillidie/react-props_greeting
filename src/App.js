import "./styles.css";

export default function App() {
  return <Greeting name="John" isCoach={false} />;
}

function Greeting({ name, isCoach }) {
  return <h1>Hello, {isCoach ? name : "there"}!</h1>;
}
