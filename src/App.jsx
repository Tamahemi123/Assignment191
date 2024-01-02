import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Cart from "./pages/Cart/cart"
import Blog from "./pages/Blog/Blog"
import CheckoutPage from "./pages/CheckoutPages/CheckoutPage"
import Contact from "./pages/Contacts/contact"
import Product from "./pages/Products/product"
import AccountRegistration from "./pages/AccountRegistrationPage"
import FrequentlyAskedQuestions from "./pages/FrequentlyAskedQuestion"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Reviews from "./pages/Reviews"
import SearchResultPage from "./pages/SearchResultPage"

const App = () => {
  return (
    <div>
      <Home/>
      <Navbar/>
      <Cart/>
      <Blog/>
      <CheckoutPage/>
      <Contact/>
      <Product/>
      <AccountRegistration/>
      <FrequentlyAskedQuestions/>
      <PrivacyPolicy/>
      <Reviews/>
      <SearchResultPage/>
      


    </div>
  )
}

export default App
