import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createRoot } from "react-dom/client";
import App from "./App";
import ReportDataHandler from "./ReportDataHandler";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    // element: <ReportDataHandler draftName="local-report" />,
    element: <ReportDataHandler draftName="draft2020-12" />,
  },
  {
    path: "/draft2020-12",
    element: <ReportDataHandler draftName="draft2020-12" />,
  },
  {
    path: "/draft2019-09",
    element: <ReportDataHandler draftName="draft2019-09" />,
  },
  {
    path: "/draft7",
    element: <ReportDataHandler draftName="draft7" />,
  },
  {
    path: "/draft6",
    element: <ReportDataHandler draftName="draft6" />,
  },
  {
    path: "/draft4",
    element: <ReportDataHandler draftName="draft4" />,
  },
  {
    path: "/draft3",
    element: <ReportDataHandler draftName="draft3" />,
  },
]);

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={router} />);
});
