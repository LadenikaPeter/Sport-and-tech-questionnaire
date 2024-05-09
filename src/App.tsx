import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/Root";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import Module1 from "./pages/Module1";
import Module2 from "./pages/Module2";
import Module3 from "./pages/Module3";
import Training from "./pages/Training";
import SocialEng from "./pages/SocialEng";
import Phishing from "./pages/Phishing";
import Encryption from "./pages/Encryption";
import Vpn from "./pages/Vpn";
import Tfa from "./pages/Tfa";
import Malware from "./pages/Malware";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/menu", element: <MenuPage /> },
        { path: "/training", element: <Training /> },
        { path: "/module-1", element: <Module1 /> },
        { path: "/module-2", element: <Module2 /> },
        { path: "/module-3", element: <Module3 /> },
        { path: "/social-engineering", element: <SocialEng /> },
        { path: "/phishing", element: <Phishing /> },
        { path: "/encryption", element: <Encryption /> },
        { path: "/vpn", element: <Vpn /> },
        { path: "/tfa", element: <Tfa /> },
        { path: "/malware", element: <Malware /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
