// manual debounce in react
import { useRef } from 'react';

const DebouncedButton = ({ onClick, children }) => {
  const timerRef = useRef();
  const click = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onClick();
    }, 1000);
  };

  return <button onClick={click}>{children}</button>;
};

export default function Dashboard() {
  const makeAlert = text => () => alert(text);

  return (
    <>
      <DebouncedButton onClick={makeAlert('Spaceship launched!')}>
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton onClick={makeAlert('Soup boiled!')}>
        Boil the soup
      </DebouncedButton>
      <DebouncedButton onClick={makeAlert('Lullaby sung!')}>
        Sing a lullaby
      </DebouncedButton>
    </>
  );
}
