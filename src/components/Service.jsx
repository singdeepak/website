export default function Service(){
    return(
        <section className="p-4" id="services">
            <h3 className="text-center text-4xl font-bold p-5 text-orange-600">Our Burger Flavour</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-orange-600 p-4">
                    <img src="img1.jpg" alt="image" />
                </div>
                <div className="bg-orange-600 p-4">
                    <img src="img2.jpg" alt="image" />
                </div>

                <div className="bg-orange-600 p-4">
                    <img src="img3.jpg" alt="image" />
                </div>

                <div className="bg-orange-600 p-4">
                    <img src="img4.jpg" alt="image" />
                </div>

                <div className="bg-orange-600 p-4">
                    <img src="img5.jpg" alt="image" />
                </div>

                <div className="bg-orange-600 p-4">
                    <img src="img6.jpg" alt="image" />
                </div>
            </div>
        </section>
    )
}