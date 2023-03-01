import { BrowserRouter, Routes, Route } from "react-router-dom";

import PersistentDrawer from "components/PersistentDrawer";
import Home from "pages/Home";
import NoMatched from "pages/NoMatched";
import Property from "pages/Property";
import Schedule from "pages/Schedule";
import FavoriteFoods from "pages/FavoriteFoods";
import Payments from "pages/Payments";
import Messages from "pages/Messages";
import Introduce from "pages/Introduce";
import Awards from "pages/Awards";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersistentDrawer />}>
          <Route index path="profile" element={<Home />} />
          <Route path="property" element={<Property />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="favoriteFoods" element={<FavoriteFoods />} />
          <Route path="payments" element={<Payments />} />
          <Route path="messages" element={<Messages />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="awards" element={<Awards />} />
        </Route>
        <Route path="*" element={<NoMatched />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
