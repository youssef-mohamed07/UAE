import AppNav from "../components/AppNav";
import Footer from "../components/Footer";
import Quotation from "../components/Quotation";
import SubNav from "../components/SubNav";

function QuotationPage() {
  return (
    <div className="relative">
      <SubNav />
      <AppNav />
      <Quotation />
      <Footer />
    </div>
  );
}

export default QuotationPage;
