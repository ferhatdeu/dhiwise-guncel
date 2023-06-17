import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const EKYCSuccessful = React.lazy(() => import("pages/EKYCSuccessful"));
const EKYCSignature = React.lazy(() => import("pages/EKYCSignature"));
const EKYCIntroductionStepFour = React.lazy(() =>
  import("pages/EKYCIntroductionStepFour")
);
const EKYCConfirmInformation = React.lazy(() =>
  import("pages/EKYCConfirmInformation")
);
const EKYCIntroductionStepThree = React.lazy(() =>
  import("pages/EKYCIntroductionStepThree")
);
const EKYCScanFace = React.lazy(() => import("pages/EKYCScanFace"));
const EKYCIntroductionStepTwo = React.lazy(() =>
  import("pages/EKYCIntroductionStepTwo")
);
const EKYCScanIDCardAddimage = React.lazy(() =>
  import("pages/EKYCScanIDCardAddimage")
);
const EKYCScanIDCard = React.lazy(() => import("pages/EKYCScanIDCard"));
const EKYCIntroductionStepOne = React.lazy(() =>
  import("pages/EKYCIntroductionStepOne")
);
const EKYCBegin = React.lazy(() => import("pages/EKYCBegin"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<EKYCBegin />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/ekycintroductionstepone"
            element={<EKYCIntroductionStepOne />}
          />
          <Route path="/ekycscanidcard" element={<EKYCScanIDCard />} />
          <Route
            path="/ekycscanidcardaddimage"
            element={<EKYCScanIDCardAddimage />}
          />
          <Route
            path="/ekycintroductionsteptwo"
            element={<EKYCIntroductionStepTwo />}
          />
          <Route path="/ekycscanface" element={<EKYCScanFace />} />
          <Route
            path="/ekycintroductionstepthree"
            element={<EKYCIntroductionStepThree />}
          />
          <Route
            path="/ekycconfirminformation"
            element={<EKYCConfirmInformation />}
          />
          <Route
            path="/ekycintroductionstepfour"
            element={<EKYCIntroductionStepFour />}
          />
          <Route path="/ekycsignature" element={<EKYCSignature />} />
          <Route path="/ekycsuccessful" element={<EKYCSuccessful />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
