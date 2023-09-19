
import Header from "../components/Header"
import PopularCategories from "../components/PopularCategories"
import SlideCard from "../components/SlideCard"
import SlideHeader from "../components/SlideHeader"
import Category from "../components/category/Category"

const Home = () => {
    return (
        <>
        <Header />
        <SlideHeader />
        <SlideCard />
        <PopularCategories />
        <Category />
        
        </>
    )
}

export default Home