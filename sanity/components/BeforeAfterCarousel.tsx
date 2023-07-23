import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Carousel from './Carousel'

export default function BeforeAfterCarousel() {
  return (
    <Carousel>
      <div>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src="before1.jpg" alt="Before" />}
          itemTwo={<ReactCompareSliderImage src="after1.jpg" alt="After" />}
        />
      </div>
      {/* Add more slides as needed */}
    </Carousel>
  );
}
