

const Slider = () => {
     return (
          <div >
               <div className="carousel mt-4 md:h-96 h-52">
                    <div id="item1" className="carousel-item w-full">
                         <img
                              src="https://i.imghippo.com/files/coE0w1725115771.jpg"
                              className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                         <img
                              src="https://i.ibb.co/LCVkhpc/arjun-mj-UEei-Ze-KFlks-unsplash.jpg"
                              className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                         <img
                              src="https://i.ibb.co/YQGYvzV/audience-1867754.jpg"
                              className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                         <img
                              src="https://i.ibb.co/JpYgVmm/jorge-fernandez-salas-l-SCD5-QDwq-Q8-unsplash.jpg"
                              className="w-full" />
                    </div>
               </div>
               <div className="flex w-full justify-center gap-2 py-2 ">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
               </div>










          </div>
     );
};

export default Slider;