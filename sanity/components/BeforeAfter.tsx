import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const BeforeAfter = () => (
  <>
    <div className="carousel max-w-screen-2xl">
      <div id="slide1" className="carousel-item relative">
        <div className="compare-slider-container">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="trunk-after.jpg" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="trunk-before.jpg" alt="Image two" />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="trunk-after.jpg" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="trunk-before.jpg" alt="Image two" />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="trunk-after.jpg" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="trunk-before.jpg" alt="Image two" />}
          />
        </div>
      </div>
      <div id="slide2" className="carousel-item relative">
        <div className="compare-slider-container">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" alt="Image two" />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" alt="Image two" />}
          />
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" alt="Image two" />}
          />
        </div>
      </div>
    </div>
    <div className="flex justify-center w-full py-2 gap-2">
      <a href="#item1" className="btn btn-xs">1</a>
      <a href="#item2" className="btn btn-xs">2</a>
      {/* <a href="#item3" className="btn btn-xs">3</a>
      <a href="#item4" className="btn btn-xs">4</a> */}
    </div>
  </>
);

export default BeforeAfter
