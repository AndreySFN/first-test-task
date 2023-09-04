import { Route, Routes } from 'react-router-dom';
import { About, Error404, Home, Info } from './pages';
import { Container } from './widgets';

//TODO: Сменить на CreateRouter (или типа того)
export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route path=":locale">
          <Route path="" element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="about" element={<About />} />
        </Route>
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
